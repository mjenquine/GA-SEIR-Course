class BooksController < ApplicationController

  def index
    render json: {status: 200, books: Book.all}
  end

  def show
    book = Book.find(params[:id])
    render json: { status: 200, book: book }
  end

  def create
    book = Book.new(book_params)

    if book.save
      render json: { status: 201, book: book }
    else
      render json: { status: 422, book: book }
    end
  end

  def update
    book = Book.find(params[:id])
    book.update(book_params)
    render json: { book: book }
  end

  def destroy
    book = Book.destroy(params[:id])
    render json: { status: 204 }
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :genre, :publisher, :publish_date)
  end

end
