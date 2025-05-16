# scrapers/scholarships_com.py
import requests
from bs4 import BeautifulSoup
from datetime import datetime

def parse_amount(text):
    if 'full' in text.lower():
        return 'Full'
    elif 'partial' in text.lower():
        return 'Partial'
    elif 'small' in text.lower() or 'stipend' in text.lower():
        return 'Small'
    return 'Unknown'

def scrape_scholarships():
    base_url = "https://www.scholarships.com/financial-aid/college-scholarships/scholarship-directory"
    res = requests.get(base_url)
    soup = BeautifulSoup(res.content, 'html.parser')

    scholarships = []

    for item in soup.select(".scholarship-listing"):
        name = item.select_one("h3").text.strip()
        link = "https://www.scholarships.com" + item.select_one("a")['href']
        details = item.text.lower()

        scholarships.append({
            "name": name,
            "amount": parse_amount(details),
            "deadline": extract_deadline(details),
            "eligibility": {
                "course": extract_course(details),
                "gpa": extract_gpa(details),
                "location": extract_location(details),
                "special_criteria": extract_special_criteria(details),
            },
            "source": "Scholarships.com",
            "link": link,
        })

    return scholarships

# You can define extract_course, extract_gpa, etc. with regex
