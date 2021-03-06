class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :rsvps, dependent: :destroy
  has_many :events, through: :rsvps
end

#Darlene Test Comment-Not to be deleted.
