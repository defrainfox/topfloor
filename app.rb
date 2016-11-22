# topfloor.rb
require 'sinatra/partial'
require 'sinatra/content_for'
require 'sinatra'
require 'haml'

class TopTloor < Sinatra::Base
	helpers do
	  def partial(page, options={})
	    haml page.to_sym, options.merge!(:layout => false)
	  end
	end

	get '/' do
		haml :index
	end

	get '/login' do
		haml :login
	end

	get '/recuperar' do
		haml :recuperar
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

	get '/next_simulador' do
		haml :next_simulador
	end

	get '/proyectos' do
		haml :proyectos
	end

	get '/proyecto_contratos' do
		haml :proyecto_contratos
	end

	get '/subir_contratos' do
		haml :subir_contratos
	end

	get '/registro' do
		haml :registro
	end

	get '/datos_bancarios' do
		haml :datos_bancarios
	end

	get '/desarrollador' do
		haml :desarrollador
	end

	get '/constructor' do
		haml :constructor
	end

	get '/profile' do
		haml :profile
	end

	get '/datos' do
		haml :datos
	end

	get '/editar' do
		haml :editar
	end

	get '/notifications' do
		haml :notifications
	end

	get '/faq' do
		haml :faq
	end

	get '/terminos' do
		haml :terminos
	end
end