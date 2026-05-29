# 🚀 ไฟล์: start.py
# 🪄 เชื่อมต่อระบบ VIDER OFFICE ทั้งหมดด้วยโค้ดเพียงบรรทัดเดียว!!!
from vider_office import ViderOfficeAPI

# 🚀 รันระบบได้เลยจบครบ
api = ViderOfficeAPI(host="0.0.0.0", port=7777)
api.run_server()
