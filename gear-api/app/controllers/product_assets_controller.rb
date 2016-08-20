class ProductAssetsController < ApplicationController
  before_action :set_product_asset, only: [:show, :update, :destroy]

  # GET /product_assets
  def index
    @product_assets = ProductAsset.all

    render json: @product_assets
  end

  # GET /product_assets/1
  def show
    render json: @product_asset
  end

  # POST /product_assets
  def create
    @product_asset = ProductAsset.new(product_asset_params)

    if @product_asset.save
      render json: @product_asset, status: :created, location: @product_asset
    else
      render json: @product_asset.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /product_assets/1
  def update
    if @product_asset.update(product_asset_params)
      render json: @product_asset
    else
      render json: @product_asset.errors, status: :unprocessable_entity
    end
  end

  # DELETE /product_assets/1
  def destroy
    @product_asset.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_asset
      @product_asset = ProductAsset.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_asset_params
      params.require(:product_asset).permit(:product_id, :name, :url, :mime_type)
    end
end
