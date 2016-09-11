module Api
  module V1
    class NotesController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json 

      def index
        respond_with(Note.all.order("id DESC"))
      end

      def show
        respond_with(Note.find(params[:id]))
      end

      def create
        @note = Note.new(note_params) 
        if @note.save
          respond_to do |format|
            format.json { render :json => @note }
          end
        end
      end

      def update
        @note = Note.find(params[:id])
        if @note.update(note_params)
          respond_to do |format|
            format.json { render :json => @note }
          end
        end
      end

      def destroy
        respond_with Note.destroy(params[:id]) 
      end

      private
        def note_params
          params.require(:note).permit(:title, :body) 
        end
    end
  end
end
