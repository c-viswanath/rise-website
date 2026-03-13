import os
import json
import re

img_dir = 'Question'
resume_dir = 'Question 1'

images = os.listdir(img_dir) if os.path.exists(img_dir) else []
resumes = os.listdir(resume_dir) if os.path.exists(resume_dir) else []

def clean_name(name):
    # Remove things like MS2025014
    name = re.sub(r'MS\d+\s*', '', name)
    # Replace dots with spaces
    name = name.replace('.', ' ')
    # Title case
    return name.title().strip()

def get_name(filename):
    name, ext = os.path.splitext(filename)
    if '_' in name:
        parts = name.split('_')
        if parts[-1].strip() == '':
             return parts[-2].strip()
        return parts[-1].strip()
    return name

people_dict = {}

for img in images:
    if img.startswith('.') or not os.path.isfile(os.path.join(img_dir, img)): continue
    raw_name = get_name(img)
    clean = clean_name(raw_name)
    people_dict[clean] = {
        'photo': f'assets/Question/{img}',
        'resume': '',
        'name': clean,
        'role': 'MS/PhD Scholar',
        'department': 'IIIT-Bangalore'
    }

for res in resumes:
    if res.startswith('.') or not os.path.isfile(os.path.join(resume_dir, res)): continue
    raw_name = get_name(res)
    clean = clean_name(raw_name)
    
    # fuzzy match
    matched = False
    for k in people_dict:
        if clean.lower() in k.lower() or k.lower() in clean.lower():
            people_dict[k]['resume'] = f'assets/Question 1/{res}'
            matched = True
            break
    if not matched:
        people_dict[clean] = {
            'photo': '',
            'resume': f'assets/Question 1/{res}',
            'name': clean,
            'role': 'MS/PhD Scholar',
            'department': 'IIIT-Bangalore'
        }

people_list = list(people_dict.values())
for p in people_list:
    parts = p['name'].split()
    initials = "".join([part[0].upper() for part in parts if part])[:2] if parts else "XX"
    p['initials'] = initials

# We need the links structure to have the resume linked, per people.js format
# Let's check people.js:
# links: { website: "#", linkedin: "#", etc }
# Wait, it doesn't have resume explicitly, but we can add website: resume
for p in people_list:
    p['links'] = {
        'resume': p.pop('resume', '')
    }

js_content = f"const PEOPLE_DATA = {json.dumps(people_list, indent=4)};\n"

with open('../data/people.js', 'w') as f:
    f.write(js_content)
    
print("Updated data/people.js")
