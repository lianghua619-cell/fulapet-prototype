from http.server import HTTPServer, SimpleHTTPRequestHandler
import json, urllib.request

WEBHOOK = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=fbc30840-c593-4127-8d12-62e9a73d7d72'

class Handler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/webhook':
            length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(length)
            try:
                req = urllib.request.Request(WEBHOOK, data=body, headers={'Content-Type': 'application/json; charset=utf-8'})
                resp = urllib.request.urlopen(req)
                result = resp.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(result)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, format, *args):
        print(f'[proxy] {args[0]}')

if __name__ == '__main__':
    server = HTTPServer(('127.0.0.1', 8080), Handler)
    print('Webhook proxy running on http://127.0.0.1:8080/webhook')
    server.serve_forever()
