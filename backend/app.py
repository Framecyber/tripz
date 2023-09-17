import base64

from flask import Flask, request, render_template, flash, redirect, url_for, make_response
from huaweicloudsdkcore.auth.credentials import BasicCredentials
from huaweicloudsdkocr.v1.region.ocr_region import OcrRegion
from huaweicloudsdkcore.exceptions import exceptions
from huaweicloudsdkocr.v1 import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['*'])
# app.secret_key = 'your_secret_key'  # Replace with your own secret key

@app.route('/process', methods=['POST'])
def process():
    if request.method == 'POST':
        # image_base64 = request.form['base64']  # Retrieve the image URL from the form
        image_base64 = request.data.decode("utf-8")
        # Initialize OCR client and credentials
        ak = "GVWM2NWD6DIEBDGM1UY6"
        sk = "Alvtv4QXmZa2KiZtjL9q7qaX9HB3pXsBFbIQ5udo"
        credentials = BasicCredentials(ak, sk)

        client = OcrClient.new_builder() \
            .with_credentials(credentials) \
            .with_region(OcrRegion.value_of("ap-southeast-2")) \
            .build()

        try:
            ocr_request = RecognizeThailandIdcardRequest()
            ocr_request.body = ThailandIdcardRequestBody(
                image=image_base64,
            )
            response = client.recognize_thailand_idcard(ocr_request)
            # result = response.result
            # Return the OCR result as JSON
            print(response.result.address_th)
            return response.to_dict()
        except exceptions.ClientRequestException as e:
            print(e)
            return {'error': f"Error: {e.error_msg}"}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
