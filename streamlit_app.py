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
      iframe { display: block; background: #000; }
    </style>
    """,
    unsafe_allow_html=True,
)

components.iframe(
    "/app/static/portfolio/index.html",
    height=1200,
    scrolling=True,
)
