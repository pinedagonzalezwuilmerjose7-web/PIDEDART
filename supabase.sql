-- Script para crear las tablas base en Supabase (Ejecutar en el SQL Editor de Supabase)

-- Tabla de Categorías
CREATE TABLE public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Artistas
CREATE TABLE public.artists (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    specialty TEXT,
    bio TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Obras de Arte
CREATE TABLE public.artworks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    artist_id UUID REFERENCES public.artists(id),
    category_id UUID REFERENCES public.categories(id),
    price DECIMAL(10, 2) NOT NULL,
    dimensions TEXT,
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security) para permitir acceso público de solo lectura
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artworks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone." ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON public.artists FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON public.artworks FOR SELECT USING (true);
