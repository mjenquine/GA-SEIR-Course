require 'test_helper'

class IceCreamsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ice_cream = ice_creams(:one)
  end

  test "should get index" do
    get ice_creams_url, as: :json
    assert_response :success
  end

  test "should create ice_cream" do
    assert_difference('IceCream.count') do
      post ice_creams_url, params: { ice_cream: { description: @ice_cream.description, name: @ice_cream.name } }, as: :json
    end

    assert_response 201
  end

  test "should show ice_cream" do
    get ice_cream_url(@ice_cream), as: :json
    assert_response :success
  end

  test "should update ice_cream" do
    patch ice_cream_url(@ice_cream), params: { ice_cream: { description: @ice_cream.description, name: @ice_cream.name } }, as: :json
    assert_response 200
  end

  test "should destroy ice_cream" do
    assert_difference('IceCream.count', -1) do
      delete ice_cream_url(@ice_cream), as: :json
    end

    assert_response 204
  end
end
