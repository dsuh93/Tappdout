class User < ApplicationRecord
  validates :username, :first_name, :last_name, :email, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :checkins,
    foreign_key: :user_id,
    class_name: :Checkin 

  has_many :toasts,
    foreign_key: :toaster_id,
    class_name: :Toast

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.update!(session_token: self.class.generate_session_token)
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
