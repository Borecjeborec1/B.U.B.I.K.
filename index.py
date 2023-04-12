import Pequena
import os
import os
from dotenv import load_dotenv

load_dotenv()

WIN_USER = os.getenv('WIN_USER')

supported_apps = {
    "brave": "brave.exe",
    "google": "chrome.exe",
    "chrome": "chrome.exe",
    "blender": "C:/Program Files/Blender Foundation/Blender 3.1/blender-launcher.exe",
    "obsidian": "C:/Users/{}/AppData/Local/Obsidian/obsidian.exe".format(WIN_USER),
    "vlc": "C:/Program Files/VideoLAN/VLC/vlc.exe",
    "godot": "C:/Users/{}/Downloads/Godot_v3.5.1-stable_win64.exe/Godot_v3.5.1-stable_win64.exe".format(WIN_USER),
    "aseprite": "C:/Program Files/Aseprite/aseprite.exe",
    "lol": "C:/Riot Games/Riot Client/RiotClientServices.exe",
    "league of legends": "C:/Riot Games/Riot Client/RiotClientServices.exe",
    "tft": "C:/Riot Games/Riot Client/RiotClientServices.exe",
    "vscode": "C:/Users/{}/AppData/Local/Programs/Microsoft VS Code/code.exe".format(WIN_USER),
    "code": "C:/Users/{}/AppData/Local/Programs/Microsoft VS Code/code.exe".format(WIN_USER),
    "discord": "C:/Users/{}/AppData/Local/Discord/app-1.0.9011/Discord.exe".format(WIN_USER),
    "word": "C:/Program Files/Microsoft Office 15/root/office15/WINWORD.exe",
    "ms word": "C:/Program Files/Microsoft Office 15/root/office15/WINWORD.exe",
    "excel": "C:/Program Files/Microsoft Office 15/root/office15/EXCEL.exe",
    "ms excel": "C:/Program Files/Microsoft Office 15/root/office15/EXCEL.exe",
    "powerpoint": "C:/Program Files/Microsoft Office 15/root/office15/powerptn.exe",
}

html_file = "client/index.html"
window_name = "Hello World!"


def open_app(application_name):
    os.system('start {}'.format(supported_apps[application_name]))


Pequena.expose_function(open_app)

Pequena.init(html_file, window_name)
Pequena.create_window(fullscreen=True)
