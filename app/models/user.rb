class User < ActiveRecord::Base
  before_save { self.email = email.downcase }

  validates :name,  presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
            format: { with: VALID_EMAIL_REGEX },
            uniqueness: { case_sensitive: false }
  validates :password, presence: true, length:{ maximum: 4, minimum: 4 }

  # Returns true if the given token matches the digest.
  def authenticate(password)
    self.password == password #md5
  end

end
