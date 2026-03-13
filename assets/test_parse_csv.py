import csv

with open('Scholars profile for RISE 2026 website(Sheet1).csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    print("Columns:", reader.fieldnames)
    count = 0
    for row in reader:
        print("Name:", row.get('Full name'))
        print("About length:", len(row.get('About yourself (as a researcher)', '')))
        count += 1
    print(f"Total rows: {count}")
