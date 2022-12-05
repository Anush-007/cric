import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json

# Read the data at the posts reference (this is a blocking operation)
def listener(event):
    with open("data.json", "w") as outfile:
        json.dump(data, outfile)

url = r"https://cricknit-7a7af-default-rtdb.firebaseio.com/"
cred = {
  "type": "service_account",
  "project_id": "cricknit-7a7af",
  "private_key_id": "0c4f502ab1d0fb443ec06b21b108da6fbd0a6fc8",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC9Byp8UT55tqo/\nhetTFWiZ3HmLI5Jxk2IyRxv3FT/VSdukvZ74a47O5MQ8arRb8imKbYG5xYZuT1NT\n1rzEC9Xh1TlW672mREzHo2EQty4x68k4B/06ZGBQuQIGRw0wXbMkaxm6p37mx65B\nDFnguwymPNb+AoF0Or6U97GYe5a3r+vyT4HSNK9l3XWHCHof8Gr7n1KZxH76Q3iS\nVeBNg6CJdaSrgZWmLt4/Wxjd1XbKpWSCHXLRiRYkjLCwQa0gOqgYNaDExkHf4jjf\n59Nlx1x2CxddhWFbSIxSpht4UwAs4YBh8IKeR8T82nE65Xv7vsvtOZtFB+inNOZO\nX6hGvSDlAgMBAAECggEAKMRA32rOJIXGlciWBecaFgS8mctkK+ZzSRCY8WK9z4wM\nOK1EeaMIu4oO4FDK8QF7AAW58oys/2FQQUaQk19SE1Be+2YAErmsLWoI5wf6iH2n\nedQPQuae9wnPa/cq2wF6PyJx/BVfgvoRlKnLQHJWugto+oMj1CNPMuVwgcg1qwuA\nXlHq5H8iEjajvWKZY0DGQmYK+iwtsFx8qPp4M/HzjRcfqPI0NVuIkbk0vHft6yR9\n0MmKckOkYgImvb/D0G+lmaFrkHB+5JzGYvscc6C6NW1lV7ci4Py4UHeCLKBUE2I7\ncDrQ9rAfU+qfW2AcWeio1thj54igB/JxOa+WazQkgQKBgQDzysrPqCVErOlas35y\n7HupfK0nJS2MjXqBHH0JUFot1NH1NE+scEE7MP/LvRomvfHcpy6YxUxOFoD7oNYH\n5WRZlZCxw9GO7Sw/jynBgh+Fbti1YHHmaaoBh2iyEZUMj+jFg+euIRIjjvTS2sHF\nsHZKiBhDbH6JPzd0wIodD2EPcQKBgQDGflgCSS1BeXBR9bqp9hanI6d8V18gkMDC\n6HEI3OIFpn/hvoYczXX88WrMEKwOGep3WYzOK2zgS6d/A8h/TIZJID1PLtC0KN9u\n3nZtfPk0H3A0U0g/ttV4sj+ASvwZug3xV0YjCIKSUqgokqV5U9mk8MEUnTooOcI7\nLa3W8qGWtQKBgArlSFUpjajZFYDRPtiCCzDS+qYiOjvq4su8azYsWitsNIoB8YGi\nbrfng7cmV3Hd0V5sNl/riXJ//PnCAW7O6MI8NgBL4STDItQgYNxeJWyAPL02d0C1\n/jwdQiebM48hK2UQdR1KKxZdwEFgN4LPVSoVlQgGZE1b/u1/4WxVEKBxAoGAF/my\nz7PfD4WHl57CyTy8R7v6wv4as2hIoEJLRPLJKj2OPMoykNAQbFkMuVFaNunSdFAQ\nveZo5D6/IIxob1fi8HpAbYwOEXTOaCnezCLIRw91EhztISUIa+e729cy1Diw7nHI\nOvsQKnRpc10jN6B1LYMXD1Jeb/VqDJPb55avBfECgYBPNx25LpH987Q0GJlbA24j\n8wqKfirmpbvt3Tqk73G6iEKmPq9NfiK8SjUg4yep86iOrjx7k1gDGxwIAhXMuFK4\nq4RXAsIQvDLEb3EsLB6aUskUCHTCUN/99gqRqQ0fckgwrdFTNul4EXInQj4Cf6fp\nciMxMv+LWdDJBLFRE30uOQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-tslvk@cricknit-7a7af.iam.gserviceaccount.com",
  "client_id": "105233481746596511781",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tslvk%40cricknit-7a7af.iam.gserviceaccount.com"
}

cred = credentials.Certificate(cred)
firebase_admin.initialize_app(cred, {'databaseURL': url})
ref = db.reference("")
data = ref.get()
with open("data.json", "w") as outfile:
    json.dump(data, outfile)

ref.listen(listener)





