from datetime import datetime, timedelta
def match_scholarships(scholarships, profile):
    matched = []
    for sch in scholarships:
        e = sch['eligibility']
        if (
            (e['course'].lower() == profile['course'].lower() or e['course'] == 'Any') and
            profile['gpa'] >= e['gpa'] and
            (e['location'].lower() == profile['location'].lower() or e['location'] == 'Any')
        ):
            matched.append(sch)
        # deadline = datetime.strptime(sch['deadline'], '%Y-%m-%d')
        # if deadline - datetime.now().date() < timedelta(days=7):
        #     print("⚠️ Urgent Deadline!")
    return matched
