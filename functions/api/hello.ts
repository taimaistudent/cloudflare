export async function onRequestGet(context: { request: Request }): Promise<Response> {
    return new Response(JSON.stringify({
        message: "Hello from Cloudflare Pages Functions!",
        timestamp: new Date().toISOString(),
        url: new URL(context.request.url).pathname
    }), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}