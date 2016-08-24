require 'test_helper'

class ProductAssetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product_asset = product_assets(:one)
  end

  test "should get index" do
    get product_assets_url, as: :json
    assert_response :success
  end

  test "should create product_asset" do
    assert_difference('ProductAsset.count') do
      post product_assets_url, params: { product_asset: { mime_type: @product_asset.mime_type, name: @product_asset.name, product_id: @product_asset.product_id, url: @product_asset.url } }, as: :json
    end

    assert_response 201
  end

  test "should show product_asset" do
    get product_asset_url(@product_asset), as: :json
    assert_response :success
  end

  test "should update product_asset" do
    patch product_asset_url(@product_asset), params: { product_asset: { mime_type: @product_asset.mime_type, name: @product_asset.name, product_id: @product_asset.product_id, url: @product_asset.url } }, as: :json
    assert_response 200
  end

  test "should destroy product_asset" do
    assert_difference('ProductAsset.count', -1) do
      delete product_asset_url(@product_asset), as: :json
    end

    assert_response 204
  end
end
