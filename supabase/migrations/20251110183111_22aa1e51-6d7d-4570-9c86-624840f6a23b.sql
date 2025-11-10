-- Create contact_messages table to store form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages (public contact form)
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading messages (for admin view - you can make this more restrictive later)
CREATE POLICY "Anyone can view contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (true);

-- Create index for better performance when ordering by date
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);