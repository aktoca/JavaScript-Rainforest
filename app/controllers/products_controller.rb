class ProductsController < ApplicationController
  before_filter :load_product, :only => [:edit, :show, :update]

  def index
    @products = if params[:search]
         Product.where("name LIKE ?", "%#{params[:search]}%")
      else
         Product.all
     end
  end

  def search
    @products = Product.where("name LIKE ?", "%{params[:search]}%")
    if current_user
      @review = @product.reviews.build
    end
  end

  def new
    @product = Product.new
  end

  def edit
  end

  def show
    if current_user
      @review = @product.reviews.new
    end
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to product_path(@product)
    else
      render :new
    end
  end

  def update

    if @product.update_attributes(product_params)
      redirect_to product_path(@product)
    else
      render :edit
    end
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :price_in_cents)
  end

  def load_product
    @product = Product.find(params[:id])
  end

end
