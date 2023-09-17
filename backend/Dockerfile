FROM python:3.11

WORKDIR /app
COPY ./requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install gunicorn


COPY app.py .

ENTRYPOINT [ "gunicorn", "-w", "4", "--bind" , "0.0.0.0:8000" ]

CMD ["app:app" ]