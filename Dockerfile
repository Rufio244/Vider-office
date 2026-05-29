FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY vider_office.py .

EXPOSE 8888

CMD ["uvicorn", "vider_office:app", "--host", "0.0.0.0", "--port", "8888", "--workers", "4"]
