import re
import os
import json
import urllib.request
from typing import List, Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="NexusStore True 120B Generative AI Assistant",
    description="Full Generative AI Assistant powered by Groq 120B LLM.",
    version="6.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CATALOG = [
  {
    "id": "tech-8",
    "title": "Amazfit GTS Smart Watch AMOLED",
    "category": "electronics",
    "brand": "Apple",
    "color": "silver gray",
    "price": 129.99,
    "oldPrice": 169.99,
    "rating": 4.8,
    "reviewsCount": 142,
    "image": "images/tech/8.jpg",
    "badge": "HOT",
    "badgeType": "hot",
    "description": "Sleek fitness smartwatch with 1.75-inch vibrant AMOLED always-on display, heart rate monitor, SpO2 sensor, and 12-day battery life."
  },
  {
    "id": "tech-5",
    "title": "Surround Sound Gaming Headset Pro",
    "category": "electronics",
    "brand": "Sony",
    "color": "black blue",
    "price": 49.99,
    "oldPrice": 69.99,
    "rating": 4.7,
    "reviewsCount": 188,
    "image": "images/tech/5.jpg",
    "badge": "POPULAR",
    "badgeType": "primary",
    "description": "Ergonomic gaming headset with noise-canceling bendable mic, 50mm dynamic neodymium audio drivers, and memory foam ear cushions."
  },
  {
    "id": "tech-9",
    "title": "Wireless Over-Ear Studio Headphones",
    "category": "electronics",
    "brand": "Sony",
    "color": "white gold",
    "price": 79.50,
    "oldPrice": 99.00,
    "rating": 4.9,
    "reviewsCount": 230,
    "image": "images/tech/9.jpg",
    "badge": "BESTSELLER",
    "badgeType": "primary",
    "description": "Hybrid active noise cancellation, deep acoustic bass, 40-hour ultra battery playtime, and plush lightweight headband."
  },
  {
    "id": "tech-7",
    "title": "Ultra-Slim 15-inch Performance Laptop",
    "category": "electronics",
    "brand": "Dell",
    "color": "space gray silver",
    "price": 499.00,
    "oldPrice": 599.00,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "images/tech/7.jpg",
    "badge": "NEW",
    "badgeType": "success",
    "description": "Powered by 12th Gen Intel Core i7, 16GB RAM, 512GB NVMe SSD with ultra-thin aluminum chassis and FHD IPS display."
  },
  {
    "id": "tech-1",
    "title": "Apple iPhone 12 Product RED 128GB",
    "category": "electronics",
    "brand": "Apple",
    "color": "red",
    "price": 449.99,
    "oldPrice": 520.00,
    "rating": 4.9,
    "reviewsCount": 310,
    "image": "images/tech/1.jpg",
    "badge": "-15%",
    "badgeType": "danger",
    "description": "Super Retina XDR OLED display, Ceramic Shield front cover, A14 Bionic chip, and pro dual-camera system with Night mode."
  },
  {
    "id": "tech-4",
    "title": "Apple iPhone 12 Ocean Blue 128GB",
    "category": "electronics",
    "brand": "Apple",
    "color": "ocean blue",
    "price": 449.99,
    "oldPrice": 520.00,
    "rating": 4.8,
    "reviewsCount": 280,
    "image": "images/tech/4.jpg",
    "badge": "POPULAR",
    "badgeType": "primary",
    "description": "Stunning Ocean Blue finish, MagSafe wireless charging compatibility, 5G cellular speed, and 4K Dolby Vision HDR video recording."
  },
  {
    "id": "tech-6",
    "title": "Canon EOS DSLR Professional Camera",
    "category": "electronics",
    "brand": "Canon",
    "color": "black",
    "price": 389.00,
    "oldPrice": 450.00,
    "rating": 4.9,
    "reviewsCount": 165,
    "image": "images/tech/6.jpg",
    "badge": "PRO",
    "badgeType": "hot",
    "description": "High-resolution 24.1 Megapixel APS-C sensor, DIGIC image processor, built-in Wi-Fi & NFC, and 18-55mm IS II zoom lens kit."
  },
  {
    "id": "tech-11",
    "title": "GoPro Hero 11 Black 4K Action Cam",
    "category": "electronics",
    "brand": "GoPro",
    "color": "black",
    "price": 249.99,
    "oldPrice": 299.99,
    "rating": 4.8,
    "reviewsCount": 115,
    "image": "images/tech/11.jpg",
    "badge": "DEAL",
    "badgeType": "warning",
    "description": "Rugged waterproof body up to 33ft, HyperSmooth 5.0 stabilization, 5.3K60 video capture, and dual LCD front & rear screens."
  },
  {
    "id": "tech-12",
    "title": "Hi-Fi Studio Desktop Speakers (Pair)",
    "category": "electronics",
    "brand": "Sony",
    "color": "matte black",
    "price": 65.00,
    "oldPrice": 85.00,
    "rating": 4.6,
    "reviewsCount": 74,
    "image": "images/tech/12.jpg",
    "badge": "",
    "badgeType": "",
    "description": "Rich stereo acoustics with 4-inch carbon fiber woofers, silk dome tweeters, and wireless Bluetooth + RCA inputs."
  },
  {
    "id": "interior-2",
    "title": "Modern Scandinavian Swivel Lounge Chair",
    "category": "home",
    "brand": "Nordic",
    "color": "mustard yellow",
    "price": 89.99,
    "oldPrice": 120.00,
    "rating": 4.9,
    "reviewsCount": 94,
    "image": "images/interior/2.jpg",
    "badge": "FEATURED",
    "badgeType": "primary",
    "description": "High-back ergonomic lumbar support chair in mustard yellow textured fabric with heavy-duty black swivel star base."
  },
  {
    "id": "interior-1",
    "title": "Nordic Cream Accent Armchair",
    "category": "home",
    "brand": "Nordic",
    "color": "beige cream",
    "price": 119.00,
    "oldPrice": 150.00,
    "rating": 4.8,
    "reviewsCount": 82,
    "image": "images/interior/1.jpg",
    "badge": "LUXURY",
    "badgeType": "hot",
    "description": "Minimalist accent armchair upholstered in warm neutral cream linen with solid angled tapered wooden legs."
  },
  {
    "id": "interior-8",
    "title": "Bosch Tassimo Espresso & Latte Machine",
    "category": "home",
    "brand": "Bosch",
    "color": "white silver",
    "price": 89.00,
    "oldPrice": 120.00,
    "rating": 4.7,
    "reviewsCount": 195,
    "image": "images/interior/8.jpg",
    "badge": "-25%",
    "badgeType": "danger",
    "description": "Intellibrew barcode technology, one-touch drink preparation for latte macchiato, cappuccino, and espresso."
  },
  {
    "id": "interior-9",
    "title": "Electric Cold Press Fruit Juicer",
    "category": "home",
    "brand": "KitchenPro",
    "color": "silver chrome",
    "price": 79.99,
    "oldPrice": 105.00,
    "rating": 4.6,
    "reviewsCount": 68,
    "image": "images/interior/9.jpg",
    "badge": "HEALTH",
    "badgeType": "success",
    "description": "Masticating slow cold press juice extractor with high juice yield, whisper-quiet motor, and easy-clean stainless body."
  },
  {
    "id": "interior-11",
    "title": "Stainless Steel Gooseneck Kitchen Faucet",
    "category": "home",
    "brand": "KitchenPro",
    "color": "stainless brushed nickel",
    "price": 45.00,
    "oldPrice": 60.00,
    "rating": 4.5,
    "reviewsCount": 51,
    "image": "images/interior/11.jpg",
    "badge": "",
    "badgeType": "",
    "description": "Commercial brushed nickel single-handle high-arc kitchen tap with 360-degree swivel spout."
  },
  {
    "id": "interior-13",
    "title": "Luxury Ceramic Coffee Mug & Saucer Set",
    "category": "home",
    "brand": "Nordic",
    "color": "emerald green burgundy red",
    "price": 18.99,
    "oldPrice": 26.00,
    "rating": 4.8,
    "reviewsCount": 112,
    "image": "images/interior/13.jpg",
    "badge": "GIFT",
    "badgeType": "warning",
    "description": "Nordic ceramic espresso cup set with gold-plated mixing spoon and rectangular serving dessert tray."
  },
  {
    "id": "interior-14",
    "title": "Boho Farmhouse Decorative Throw Pillows",
    "category": "home",
    "brand": "Nordic",
    "color": "cream white floral",
    "price": 24.99,
    "oldPrice": 35.00,
    "rating": 4.6,
    "reviewsCount": 43,
    "image": "images/interior/14.jpg",
    "badge": "",
    "badgeType": "",
    "description": "Soft textured woven cotton cushion covers with corner tassels and elegant botanical prints."
  },
  {
    "id": "cloth-1",
    "title": "Teal Blue Piqué Polo Shirt",
    "category": "clothing",
    "brand": "UrbanStyle",
    "color": "teal blue",
    "price": 24.99,
    "oldPrice": 35.00,
    "rating": 4.7,
    "reviewsCount": 130,
    "image": "images/cloth/1.jpg",
    "badge": "SALE",
    "badgeType": "warning",
    "description": "Breathable piqué cotton knit with ribbed collar and button placket for enduring everyday style."
  },
  {
    "id": "cloth-2",
    "title": "Bright Cyan Sport Polo Shirt",
    "category": "clothing",
    "brand": "UrbanStyle",
    "color": "cyan blue",
    "price": 22.99,
    "oldPrice": 32.00,
    "rating": 4.6,
    "reviewsCount": 92,
    "image": "images/cloth/2.jpg",
    "badge": "TRENDING",
    "badgeType": "hot",
    "description": "Lightweight moisture-wicking quick-dry athletic polo shirt designed for active comfort."
  },
  {
    "id": "cloth-3",
    "title": "Winter Explorer Fur Hood Parka Jacket",
    "category": "clothing",
    "brand": "UrbanStyle",
    "color": "khaki brown",
    "price": 89.99,
    "oldPrice": 120.00,
    "rating": 4.9,
    "reviewsCount": 88,
    "image": "images/cloth/3.jpg",
    "badge": "WARMTH",
    "badgeType": "hot",
    "description": "Heavy-duty windproof canvas shell with faux fur trimmed hood, fleece lining, and thermal utility cargo pockets."
  }
]

class ChatRequest(BaseModel):
    message: str
    category_filter: Optional[str] = None
    max_price: Optional[float] = None

class ProductModel(BaseModel):
    id: str
    title: str
    category: str
    brand: str
    price: float
    oldPrice: Optional[float] = None
    rating: float
    image: str
    description: str

class ChatResponse(BaseModel):
    reply: str
    products: List[ProductModel]

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "NexusStore 120B Generative AI Assistant (Groq)",
        "endpoints": {
            "products": "/api/products",
            "chat": "/api/chat (POST)"
        }
    }

@app.get("/api/products", response_model=List[ProductModel])
def get_products():
    return CATALOG

@app.post("/api/chat", response_model=ChatResponse)
async def chat_with_ai(request: ChatRequest):
    user_msg = request.message.strip()
    
    # 1. Full 120B Generative AI via Groq
    groq_api_key = os.getenv("GROQ_API_KEY")
    if groq_api_key:
        catalog_summary = [{"id": p["id"], "title": p["title"], "category": p["category"], "price": p["price"], "color": p.get("color", ""), "description": p["description"]} for p in CATALOG]
        
        system_prompt = f"""You are the charismatic, intelligent, and warm AI Shopping Concierge for NexusStore (a modern e-commerce platform).
You have full conversational intelligence like ChatGPT and can answer ANY question the customer asks: store advice, product colors, specs, comparisons, why to buy here, science, jokes, philosophy, or small talk.

Store Catalog:
{json.dumps(catalog_summary, indent=1)}

Key Store Policies:
- Free 2-Day Express Shipping on orders over $50. International shipping to Pakistan (3-5 days) & worldwide.
- 30-Day Money-Back Guarantee with free doorstep returns.
- 256-bit SSL encrypted checkout (Stripe, Visa, Mastercard, PayPal).
- Coupon code SAVE20 gives 20% off.

Instructions:
1. Answer the customer's question directly, conversationally, and naturally in 2-3 sentences.
2. If they ask about products, colors (e.g. black, red, blue, etc.), prices, or shopping advice, mention matching products by their exact titles naturally.
3. If they ask open-ended questions (e.g. "why would I buy from here?", "tell me a story", "what is your favorite tech?", "can I wear this in winter?"), converse with true intelligence without boilerplate."""

        for model_name in ["openai/gpt-oss-20b", "openai/gpt-oss-120b", "qwen/qwen3.6-27b"]:
            try:
                payload = {
                    "model": model_name,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_msg}
                    ],
                    "temperature": 0.6,
                    "max_tokens": 250
                }

                req = urllib.request.Request(
                    "https://api.groq.com/openai/v1/chat/completions",
                    data=json.dumps(payload).encode("utf-8"),
                    headers={
                        "Content-Type": "application/json",
                        "Authorization": f"Bearer {groq_api_key}",
                        "User-Agent": "NexusStore-Assistant/1.0"
                    }
                )

                with urllib.request.urlopen(req, timeout=10) as response:
                    result = json.loads(response.read().decode("utf-8"))
                    reply_text = result["choices"][0]["message"]["content"].strip()
                    reply_text = re.sub(r"<think>[\s\S]*?</think>", "", reply_text).strip()
                    
                    # Match any products mentioned in the AI response
                    matched = []
                    for p in CATALOG:
                        if p["id"] in reply_text or p["title"].lower() in reply_text.lower():
                            matched.append(p)
                    
                    # If color was requested and none matched by name, match by color
                    if not matched and any(c in user_msg.lower() for c in ["black", "red", "blue", "yellow", "cyan", "gold", "silver"]):
                        matched = [p for p in CATALOG if any(c in p.get("color", "").lower() for c in ["black", "red", "blue", "yellow", "cyan", "gold", "silver"] if c in user_msg.lower())][:3]

                    return ChatResponse(reply=reply_text, products=matched)
            except Exception as e:
                print(f"Groq {model_name} error:", e)
                continue

    # 2. Fallback
    return ChatResponse(
        reply="Hello! I am your AI Shopping Assistant at NexusStore. How can I help you today?",
        products=[]
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)