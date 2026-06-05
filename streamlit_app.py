import streamlit as st
import streamlit.components.v1 as components

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
      iframe { display: block; }
    </style>
    """,
    unsafe_allow_html=True,
)

components.html(
    """
    <iframe
      src="/app/static/portfolio/index.html"
      style="width:100%; height:100vh; border:0; margin:0; padding:0; background:#000;"
      title="Vedavyasa C S Portfolio"
      loading="eager"
    ></iframe>
    """,
    height=900,
    scrolling=False,
)
