import re

def extract_course(text):
    match = re.search(r'\b(Engineering|Arts|Science|Computer Science|Business)\b', text, re.I)
    return match.group(0) if match else 'Any'

def extract_gpa(text):
    match = re.search(r'(\d\.\d{1,2})\s*GPA', text)
    return float(match.group(1)) if match else 0.0

def extract_location(text):
    match = re.search(r'\b(New York|California|Texas|Florida)\b', text, re.I)
    return match.group(0) if match else 'Any'

def extract_special_criteria(text):
    if 'minority' in text: return 'Minority'
    if 'disability' in text: return 'Disability'
    return 'None'

def extract_deadline(text):
    match = re.search(r'Deadline:\s*(\w+\s+\d{1,2},\s+\d{4})', text)
    if match:
        try:
            return datetime.strptime(match.group(1), '%B %d, %Y').date().isoformat()
        except:
            pass
    return None
