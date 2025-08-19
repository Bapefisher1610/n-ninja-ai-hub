-- Create chatbot tables if they don't exist
CREATE TABLE IF NOT EXISTS public.chatbot_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  session_start_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  session_end_at TIMESTAMP WITH TIME ZONE,
  session_key TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'ended'))
);

CREATE TABLE IF NOT EXISTS public.chatbot_messages (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  session_id UUID NOT NULL REFERENCES public.chatbot_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable RLS for chatbot tables
ALTER TABLE public.chatbot_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_messages ENABLE ROW LEVEL SECURITY;

-- Policies for chatbot_sessions
CREATE POLICY "Allow public inserts on chatbot_sessions" ON public.chatbot_sessions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow users to select their own sessions" ON public.chatbot_sessions
FOR SELECT USING (true);

-- Policies for chatbot_messages
CREATE POLICY "Allow public inserts on chatbot_messages" ON public.chatbot_messages
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow users to select messages from their sessions" ON public.chatbot_messages
FOR SELECT USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_chatbot_messages_session_id ON public.chatbot_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_chatbot_sessions_key ON public.chatbot_sessions(session_key);