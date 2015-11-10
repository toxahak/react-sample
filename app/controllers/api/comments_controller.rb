class API::CommentsController < ApplicationController
  def index
    comments = Comment.all
    
    respond_to do |format|	
      format.json { render json: comments, status: 200 }
    end	
  end
  
  def show
    comment = Comment.find(params[:id])
    
    respond_to do |format|
      format.json { render json: comment }
    end
  end
  
  def create
    comment = Comment.new(author: params[:author], text: params[:text])
    
    respond_to do |format|
      if comment.save        
        format.json { render json: comment, status: :created, location: [:api, comment] }        
      else
        format.json { render json: comment.errors, status: :unprocessable_entity }
      end
    end
  end
  
end
