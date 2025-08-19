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

-- Enable RLS for chatbot tables
ALTER TABLE public.chatbot_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_messages ENABLE ROW LEVEL SECURITY;

-- Policies for chatbot_sessions
CREATE POLICY "Allow public inserts on chatbot_sessions" ON public.chatbot_sessions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow users to select their own sessions" ON public.chatbot_sessions
FOR SELECT USING (true); -- Allow all for anonymous chat

-- Policies for chatbot_messages  
CREATE POLICY "Allow public inserts on chatbot_messages" ON public.chatbot_messages
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow users to select messages from their sessions" ON public.chatbot_messages
FOR SELECT USING (true); -- Allow all for anonymous chat