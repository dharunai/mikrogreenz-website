
const FUNC_URL = "https://tdhcjciiwpgpetwzeqhn.supabase.co/functions/v1/contact";
const ANON_KEY = "sb_publishable_7UuCIKD903fHNOKA4R7oVQ_W48Gxq5F";

async function test() {
    console.log("Testing Edge Function...");
    const payload = {
        name: "Test User",
        email: "mikrogreenz.global@gmail.com",
        phone: "1234567890",
        city: "Test City",
        message: "This is a diagnostic test message."
    };

    try {
        const res = await fetch(FUNC_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ANON_KEY}`
            },
            body: JSON.stringify(payload)
        });

        const status = res.status;
        const text = await res.text();
        console.log(`Status: ${status}`);
        console.log(`Response: ${text}`);
    } catch (err) {
        console.error("Fetch failed:", err);
    }
}

test();
