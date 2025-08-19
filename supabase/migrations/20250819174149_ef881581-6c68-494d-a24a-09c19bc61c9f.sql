-- Create applications table
CREATE TABLE IF NOT EXISTS public.applications (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  cv_url TEXT,
  motivation TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS for applications table
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for form submissions)
CREATE POLICY "Allow public inserts on applications" ON public.applications
FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to select (for admin/review purposes)
CREATE POLICY "Allow authenticated selects on applications" ON public.applications
FOR SELECT USING (auth.role() = 'authenticated');

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at);

-- Create storage bucket for CV uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('cv-uploads', 'cv-uploads', false);

-- Storage policies for CV uploads
CREATE POLICY "Allow public uploads to cv-uploads bucket" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'cv-uploads');

CREATE POLICY "Allow public access to cv-uploads bucket" ON storage.objects
FOR SELECT USING (bucket_id = 'cv-uploads');