from scrapers import scholarships_com
from utils.matcher import match_scholarships

profile = {
    "course": "Computer Science",
    "gpa": 3.6,
    "location": "New York"
}

if __name__ == "__main__":
    all_scholarships = scholarships_com.scrape_scholarships()
    matched = match_scholarships(all_scholarships, profile)

    for sch in matched:
        print(f"\n🎓 {sch['name']} - {sch['amount']}")
        print(f"📍 {sch['eligibility']['location']}, 🧠 GPA ≥ {sch['eligibility']['gpa']}")
        print(f"📅 Deadline: {sch['deadline']}")
        print(f"🔗 {sch['link']}")
