# topfloor.rb
require 'sinatra/partial'
require 'sinatra/content_for'
require 'sinatra'
require 'Haml'

class TopTloor < Sinatra::Base

	helpers do
	  def partial(page, options={})
	    haml page.to_sym, options.merge!(:layout => false)
	  end
	end

	get '/' do
		haml :index
	end

	get '/proyecto' do
		haml :proyecto
	end

	get '/mapa' do
		haml :mapa
	end

	get '/invertir' do
		haml :invertir
	end

	get '/simulador' do
		haml :simulador
	end

	get '/run_simulador' do
		haml :run_simulador
	end

	get '/proyectos' do
		haml :proyectos
	end

	get '/registro' do
		haml :registro
	end

	get '/desarrollador' do
		haml :desarrollador
	end

	get '/profile' do
		haml :profile
	end
end