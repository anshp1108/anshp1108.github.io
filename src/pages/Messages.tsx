import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const Messages = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setMessages(data || []);
    } catch (error) {
      toast({
        title: "Error loading messages",
        description: "Could not fetch contact messages.",
        variant: "destructive",
      });
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Contact <span className="text-gradient">Messages</span>
          </h1>
          <p className="text-muted-foreground">
            {messages.length} {messages.length === 1 ? 'message' : 'messages'} received
          </p>
        </div>

        {messages.length === 0 ? (
          <Card className="p-12 text-center">
            <Mail className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
            <p className="text-muted-foreground">
              Messages from your contact form will appear here.
            </p>
          </Card>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <Card key={msg.id} className="p-6 border-2 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-accent" />
                      <h3 className="font-semibold text-lg">{msg.name}</h3>
                      <Badge variant="secondary">{msg.email}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(msg.created_at)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-accent mb-1">Subject:</h4>
                    <p className="text-foreground">{msg.subject}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent mb-1">Message:</h4>
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <a
                    href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                    className="text-sm text-accent hover:underline inline-flex items-center gap-1"
                  >
                    <Mail className="h-3 w-3" />
                    Reply to {msg.name}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
