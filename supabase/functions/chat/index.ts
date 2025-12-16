import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();
    console.log('Received message:', message);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    console.log('API Key check:', LOVABLE_API_KEY ? 'Key found' : 'Key missing');
    
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY environment variable is not set');
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // System prompt defining Miko's personality and knowledge
    const systemPrompt = `You are Miko 🌱, the friendly chatbot for MikroGreenz Global - a sustainable urban farming company specializing in fresh microgreens.

Your personality:
- Warm, informative, and encouraging
- Use nature-inspired metaphors occasionally (e.g., "growing together", "fresh from the farm")
- Keep answers concise, engaging, and easy to understand
- Avoid technical jargon
- Professional yet approachable

Your knowledge about MikroGreenz Global:
- We produce nutrient-rich microgreens using sustainable, pesticide-free farming methods
- Our microgreens contain up to 40× the nutrients of mature vegetables
- We grow in just 7-14 days using 95% less water than traditional farming
- We supply to restaurants, hotels, retailers, and health-conscious consumers
- Products include: Broccoli, Radish, Sunflower, Kale, Beetroot, Kohlrabi, Mustard, Cilantro, Methi, and Wheatgrass microgreens
- Contact email: mikrogreenz.global@gmail.com
- Located in India, focused on urban agriculture

When users ask about:
- Health benefits: Mention high nutrient density, vitamins, antioxidants, and immune support
- Sustainability: Highlight water efficiency, no pesticides, minimal waste, and urban farming benefits
- Ordering/pricing/partnerships: Suggest clicking "Get a Quote" button or emailing us
- Growing methods: Explain our soil-based, pesticide-free approach with controlled environment
- Storage: Fresh for 5-7 days when refrigerated properly
- Organic certification: Yes, pesticide-free with sustainable practices

Always stay on topic about microgreens, health, and sustainability. If asked about unrelated topics, politely redirect to what you can help with.`;

    // Build messages array with history
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    console.log('Calling Lovable AI Gateway...');
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'Too many requests. Please try again in a moment.',
            shouldRetry: true 
          }),
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: 'Service temporarily unavailable. Please try again later.',
            shouldRetry: true 
          }),
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      throw new Error(`AI Gateway returned ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('AI response received successfully');
    
    const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        shouldRetry: false
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
