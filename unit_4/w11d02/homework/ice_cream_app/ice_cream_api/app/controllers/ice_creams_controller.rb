class IceCreamsController < ApplicationController
  before_action :set_ice_cream, only: [:show, :update, :destroy]

  # GET /ice_creams
  def index
    @ice_creams = IceCream.all

    render json: @ice_creams
  end

  # GET /ice_creams/1
  def show
    pints = @ice_cream.pints
    render json: {ice_cream: @ice_cream, pints: pints}
  end

  # POST /ice_creams
  def create
    @ice_cream = IceCream.new(ice_cream_params)

    if @ice_cream.save
      render json: @ice_cream, status: :created, location: @ice_cream
    else
      render json: @ice_cream.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ice_creams/1
  def update
    if @ice_cream.update(ice_cream_params)
      render json: @ice_cream
    else
      render json: @ice_cream.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ice_creams/1
  def destroy
    @ice_cream.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ice_cream
      @ice_cream = IceCream.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def ice_cream_params
      params.require(:ice_cream).permit(:name, :description)
    end
end
