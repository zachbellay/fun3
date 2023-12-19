from .base import *

DEBUG=True

DJANGO_VITE = {
  "default": {
    "dev_mode": DEBUG,
    'static_url_prefix' : 'money'
  }
}


INTERNAL_IPS = [
    "localhost",
    "127.0.0.1",
]
