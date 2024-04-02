---
title: Configuring PowerShell (shell prompt)
description: Configuring Windows PowerShell for a Customized Shell Prompt
author: Gautam Ankoji
lastmod: 2023-05-05T13:20:36-07:00
draft: false
tags:
    - powershell
    - customization
    - utility

---


<div class="drop-cap">
In Windows PowerShell, customizing your shell prompt can enhance your development environment by providing valuable information at a glance. This guide walks you through configuring Windows PowerShell to display a customized prompt with the username, date, and current folder name.
</div>

## Checking for Existing Profile

**STEP 1**: Before proceeding, check if you have an existing profile set up in PowerShell:

{{< file "powershell" "powershell">}}

```powershell
test-path $profile
```

**STEP 2**: If the result is false, create a new profile:

{{< file "powershell" "powershell">}}

```powershell
new-item -path $profile -itemtype file -force
```

**STEP 3**: Now, open the profile in Notepad:

{{< file "powershell" "powershell">}}

```powershell
notepad $profile
```

**STEP 4**: Paste the following function to display the current folder name as the prompt:

{{< file "powershell" "powershell">}}

```powershell
function prompt {
  $p = Split-Path -leaf -path (Get-Location)
  "$p> "
}
```

**STEP 5**: Save the file. The location is predetermined, so you shouldn't need to choose one.

Reload Visual Studio Code; you may encounter a message about running scripts. Alternatively, execute the following command before reloading:

{{< file "powershell" "powershell">}}

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Reload Visual Studio Code once more.

## Examples for Terminal Short Paths

* Follow **STEP 3** again, paste the source code, save the file, and reload Visual Studio Code.

### Sample Example 1

{{< tabgroup >}}

{{< tab icon="powershell" name="result 1">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ffff00;">12:11:32<span> <span style="color: #ffffff;">|</span> <span style="color: #00ffff;">D: test</span>
<span style="color: #ff00ff;">></span> <span style="color: #ffffff;">whoami</span>
</pre>
</div>

{{< /tab >}}

{{< tab icon="terminal" name="source code 1" >}}

```powershell
function prompt {
  $time = Get-Date -Format "HH:mm:ss"
  $location = "$($time | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor DarkYellow }) $(" | " | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Gray }) $($((Get-Location).Drive.Name + ": " + $(Get-Item $pwd).Name) | ForEach-Object { Write-Host $_  -ForegroundColor Cyan }) $(">" | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Magenta })"
  return " "
}
```

{{< /tab >}}

{{< /tabgroup >}}

### Sample Example 2

{{< tabgroup >}}

{{< tab icon="powershell" name="result 2">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ffff00;">12:11:32<span> <span style="color: #ffffff;">|</span> <span style="color: #00ffff;">D: test</span>
<span style="color: #ff00ff;">$</span> <span style="color: #ffffff;">whoami</span>
</pre>
</div>

{{< /tab >}}

{{< tab icon="terminal" name="source code 2" >}}

```powershell
function prompt {
  $time = Get-Date -Format "HH:mm:ss"
  $location = "$($time | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor DarkYellow }) $(" | " | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Gray }) $($((Get-Location).Drive.Name + ": " + $(Get-Item $pwd).Name) | ForEach-Object { Write-Host $_  -ForegroundColor Cyan }) $("$" | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Magenta })"
  return " "
}
```

{{< /tab >}}

{{< /tabgroup >}}

### Sample Example 3

{{< tabgroup >}}

{{< tab icon="powershell" name="result 3">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ffff00;">username<span><span style="color: #ffffff;">@</span><span style="color: #ffff00;">ASUS<span> <span style="color: #ffffff;">|</span> <span style="color: #00ffff;">D: test</span>
<span style="color: #ff00ff;">></span> <span style="color: #ffffff;">whoami</span>
</pre>
</div>

{{< /tab >}}

{{< tab icon="terminal" name="source code 3" >}}

```powershell
function prompt {
  $username = $env:USERNAME.ToLower()
  $deviceName = $env:COMPUTERNAME
  $location = "$($username | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor DarkYellow }) $("@" | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Gray }) $($deviceName | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor DarkYellow }) $(" | " | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Gray }) $($((Get-Location).Drive.Name + ": " + $(Get-Item $pwd).Name) | ForEach-Object { Write-Host $_  -ForegroundColor Cyan }) $(">" | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Magenta })"
  return " "
}
```

{{< /tab >}}

{{< /tabgroup >}}

### Sample Example 4

{{< tabgroup >}}

{{< tab icon="powershell" name="result 4">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ffff00;">username<span><span style="color: #ffffff;">@</span><span style="color: #ffff00;">ASUS<span> <span style="color: #ffff00;">12:11:32<span> <span style="color: #ffffff;">|</span> <span style="color: #00ffff;">D: test</span>
<span style="color: #ff00ff;">></span> <span style="color: #ffffff;">whoami</span>
</pre>
</div>

{{< /tab >}}

{{< tab icon="terminal" name="source code 4" >}}

```powershell
function prompt {
  $username = $env:USERNAME.ToLower()
  $deviceName = $env:COMPUTERNAME
  $time = Get-Date -Format "HH:mm:ss"
  $location = "$($username | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor DarkYellow }) $("@" | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Gray }) $($deviceName | ForEach-Object { Write-Host $_ $time -NoNewline -ForegroundColor DarkYellow }) $(" | " | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Gray }) $($((Get-Location).Drive.Name + ": " + $(Get-Item $pwd).Name) | ForEach-Object { Write-Host $_ -ForegroundColor Cyan }) $(">" | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Magenta })"
  return " "
}
```

{{< /tab >}}

{{< /tabgroup >}}

### Sample Example 5

{{< tabgroup >}}

{{< tab icon="powershell" name="result 5">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ffff00;">username<span> <span style="color: #ffffff;">|</span> <span style="color: #ffff00;">03-09-2023 13:35<span> <span style="color: #ffffff;">|</span> <span style="color: #00ffff;">D: test</span>
<span style="color: #ff00ff;">></span> <span style="color: #ffffff;">whoami</span>
</pre>
</div>

{{< /tab >}}

{{< tab icon="terminal" name="source code 5" >}}

```powershell
function prompt {
  $username = "herogautam"
  $time = Get-Date -Format "dd-MM-yyyy HH:mm:ss"
  $location = "$($username | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Magenta }) $(" |" | ForEach-Object { Write-Host $_ $time -NoNewline -ForegroundColor DarkYellow }) $(" | " | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Gray }) $($((Get-Location).Drive.Name + ": " + $(Get-Item $pwd).Name) | ForEach-Object { Write-Host $_ -ForegroundColor Cyan }) $(">" | ForEach-Object { Write-Host $_ -NoNewline -ForegroundColor Magenta })"
  return " "
}
```

{{< /tab >}}

{{< /tabgroup >}}

### Sample Example 6

{{< tabgroup >}}

{{< tab icon="powershell" name="result 6">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ff00ff;">PS</span> <span style="color: #ffff00;">03-09-2023 13:35<span> <span style="color: #7f7f7f;">|</span> <span style="color: #ffffff;">\\user</span> <span style="color: #7f7f7f;">|</span> <span style="color: #00ffff;">D:\serverx\test</span>
<span style="color: #ff00ff;">></span> <span style="color: #ffffff;">whoami</span>
</pre>
</div>

{{< /tab >}}

{{< tab icon="terminal" name="source code 6" >}}

```powershell
function Prompt {
  write-host "PS " -ForegroundColor Magenta -NoNewline
  write-host (get-date -Format "dd-MM-yyyy HH:mm:ss") -ForegroundColor Yellow -NoNewline
  write-host " | " -ForegroundColor DarkGray -NoNewline
  write-host "\\$env:COMPUTERNAME " -ForegroundColor Gray -NoNewline
  write-host " | " -ForegroundColor DarkGray -NoNewline
  if ((Get-Location).Drive -ne $null) {
    write-host (Get-Location) -ForegroundColor Cyan
    $networkdrive = $false
  } else {
    $networkdrive = $true
    $first, $second, $third, $folder = (Get-Location).path.Split("\")
    write-host "\" -NoNewline
    $folder | foreach-object {
      write-host "\$_" -NoNewline
    }
    write-host -ForegroundColor Cyan
  }
  write-host ">" -ForegroundColor Magenta -NoNewline
  return " "
}
```

{{< /tab >}}

{{< /tabgroup >}}

## List of Powershell colors

|  **Color**  | **HTML Color Code** |
| :---------: | :-----------------: |
|  DarkCyan   |       #00cdcd       |
|   DarkRed   |       #cd0000       |
|   Magenta   |       #ff00ff       |
|    Blue     |       #5c5cff       |
|  DarkGray   |       #7f7f7f       |
| DarkYellow  |       #cdcd00       |
|     Red     |       #ff0000       |
|    Cyan     |       #00ffff       |
|  DarkGreen  |       #00cd00       |
|    Gray     |       #e5e5e5       |
|    White    |       #ffffff       |
|  DarkBlue   |       #6495ed       |
| DarkMagenta |       #cd00cd       |
|    Green    |       #00ff00       |
|   Yellow    |       #ffff00       |
