from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

BUILD_DIR = Path(__file__).parent / "static" / "portfolio"
INDEX_FILE = BUILD_DIR / "index.html"
STATIC_BASE = "/app/static/portfolio/"

st.set_page_config(
    page_title="Vedavyasa C S | Portfolio",
    page_icon="V",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
      .stApp { background: #000; }
      .block-container { padding: 0; max-width: 100%; }
      header, footer { visibility: hidden; height: 0; }
    </style>
    """,
    unsafe_allow_html=True,
)

html = INDEX_FILE.read_text(encoding="utf-8")
html = html.replace("<head>", f'<head><base href="{STATIC_BASE}">', 1)
components.html(html, height=1200, scrolling=True)
