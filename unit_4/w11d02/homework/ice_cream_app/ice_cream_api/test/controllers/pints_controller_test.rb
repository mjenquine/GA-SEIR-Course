require 'test_helper'

class PintsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pint = pints(:one)
  end

  test "should get index" do
    get pints_url, as: :json
    assert_response :success
  end

  test "should create pint" do
    assert_difference('Pint.count') do
      post pints_url, params: { pint: { month: @pint.month, pints_made: @pint.pints_made, pints_sold: @pint.pints_sold, profit_per_pint: @pint.profit_per_pint } }, as: :json
    end

    assert_response 201
  end

  test "should show pint" do
    get pint_url(@pint), as: :json
    assert_response :success
  end

  test "should update pint" do
    patch pint_url(@pint), params: { pint: { month: @pint.month, pints_made: @pint.pints_made, pints_sold: @pint.pints_sold, profit_per_pint: @pint.profit_per_pint } }, as: :json
    assert_response 200
  end

  test "should destroy pint" do
    assert_difference('Pint.count', -1) do
      delete pint_url(@pint), as: :json
    end

    assert_response 204
  end
end
