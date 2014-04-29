class User < ActiveRecord::Base
  has_many :reviews
  has_many :products, :through => :reviews

  validates_presence_of :name
  has_secure_password
end
