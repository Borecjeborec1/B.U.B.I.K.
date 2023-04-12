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

ar = []
for i in supported_apps:
    ar.append(i)
print(ar)
