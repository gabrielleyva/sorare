from fastapi import FastAPI
import requests
import json
from server.query.card import Card



sorareAPI = "https://api.sorare.com/graphql"
card = Card()
app = FastAPI()

@app.get("/")
async def welcome():
    return {"Hello" : "World"}

@app.get("/card/{slug}")
async def get(slug: str):
    myquery = card.cardQuery(slug)
    res = requests.post(sorareAPI, json={'query': myquery})
    print(res)
    json_data = json.loads(res.text)
    return json_data