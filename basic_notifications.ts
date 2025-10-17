import * as modlib from 'modlib'

export const DEBUG_ONGOING = false
let lastOngoingLog: Record<string, number> = {}

function logOngoing(name: string, obj: any) {
  const now = Date.now()
  if (!lastOngoingLog[name] || now - lastOngoingLog[name] > 60000) {
    lastOngoingLog[name] = now
    console.log(`[${new Date().toISOString()}] ${name}:`, obj)
  }
}

export function OngoingGlobal(): void {
}

export function OngoingAreaTrigger(eventAreaTrigger: mod.AreaTrigger): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingAreaTrigger`, eventAreaTrigger)
}

export function OngoingCapturePoint(eventCapturePoint: mod.CapturePoint): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingCapturePoint`, eventCapturePoint)
}

export function OngoingEmplacementSpawner(eventEmplacementSpawner: mod.EmplacementSpawner): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingEmplacementSpawner`, eventEmplacementSpawner)
}

export function OngoingHQ(eventHQ: mod.HQ): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingHQ`, eventHQ)
}

export function OngoingInteractPoint(eventInteractPoint: mod.InteractPoint): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingInteractPoint`, eventInteractPoint)
}

export function OngoingMCOM(eventMCOM: mod.MCOM): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingMCOM`, eventMCOM)
}

export function OngoingPlayer(eventPlayer: mod.Player): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingPlayer`, eventPlayer)
}

export function OngoingScreenEffect(eventScreenEffect: mod.ScreenEffect): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingScreenEffect`, eventScreenEffect)
}

export function OngoingSector(eventSector: mod.Sector): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingSector`, eventSector)
}

export function OngoingSpawner(eventSpawner: mod.Spawner): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingSpawner`, eventSpawner)
}

export function OngoingSpawnPoint(eventSpawnPoint: mod.SpawnPoint): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingSpawnPoint`, eventSpawnPoint)
}

export function OngoingTeam(eventTeam: mod.Team): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingTeam`, eventTeam)
}

export function OngoingVehicle(eventVehicle: mod.Vehicle): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingVehicle`, eventVehicle)
}

export function OngoingVehicleSpawner(eventVehicleSpawner: mod.VehicleSpawner): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingVehicleSpawner`, eventVehicleSpawner)
}

export function OngoingWaypointPath(eventWaypointPath: mod.WaypointPath): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingWaypointPath`, eventWaypointPath)
}

export function OngoingWorldIcon(eventWorldIcon: mod.WorldIcon): void {
  if (DEBUG_ONGOING) logOngoing(`OngoingWorldIcon`, eventWorldIcon)
}

export function OnAIMoveToFailed(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIMoveToFailed:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiMoveFail, eventPlayer), team)
}

export function OnAIMoveToRunning(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIMoveToRunning:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiMoveRun, eventPlayer), team)
}

export function OnAIMoveToSucceeded(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIMoveToSucceeded:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiMoveSuc, eventPlayer), team)
}

export function OnAIParachuteRunning(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIParachuteRunning:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiParaRun, eventPlayer), team)
}

export function OnAIParachuteSucceeded(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIParachuteSucceeded:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiParaSuc, eventPlayer), team)
}

export function OnAIWaypointIdleFailed(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIWaypointIdleFailed:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiWptFail, eventPlayer), team)
}

export function OnAIWaypointIdleRunning(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIWaypointIdleRunning:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiWptRun, eventPlayer), team)
}

export function OnAIWaypointIdleSucceeded(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnAIWaypointIdleSucceeded:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiWptSuc, eventPlayer), team)
}

export function OnCapturePointCaptured(eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnCapturePointCaptured:`, { eventCapturePoint })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.cpCaptured, mod.GetObjId(eventCapturePoint)))
}

export function OnCapturePointCapturing(eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnCapturePointCapturing:`, { eventCapturePoint })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.cpCapturing, mod.GetObjId(eventCapturePoint)))
}

export function OnCapturePointLost(eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnCapturePointLost:`, { eventCapturePoint })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.cpLost, mod.GetObjId(eventCapturePoint)))
}

// This will trigger when the gamemode ends.
export function OnGameModeEnding(): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnGameModeEnding.`)
}

// This will trigger at the start of the gamemode.
export function OnGameModeStarted(): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnGameModeStarted`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.gameStarted))
}

// This will trigger when a Player is forced into the mandown state.
export function OnMandown(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnMandown:`, { eventPlayer, eventOtherPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerMandown, eventPlayer, eventOtherPlayer), team)
}

export function OnMCOMArmed(eventMCOM: mod.MCOM): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnMCOMArmed:`, { eventMCOM })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.mcomArmed, mod.GetObjId(eventMCOM)))
}

export function OnMCOMDefused(eventMCOM: mod.MCOM): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnMCOMDefused:`, { eventMCOM })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.mcomDefused, mod.GetObjId(eventMCOM)))
}

export function OnMCOMDestroyed(eventMCOM: mod.MCOM): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnMCOMDestroyed:`, { eventMCOM })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.mcomDestroyed, mod.GetObjId(eventMCOM)))
}

export function OnPlayerDamaged(
  eventPlayer: mod.Player,
  eventOtherPlayer: mod.Player,
  eventDamageType: mod.DamageType,
  eventWeaponUnlock: mod.WeaponUnlock
): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerDamaged:`, { eventPlayer, eventOtherPlayer, eventDamageType, eventWeaponUnlock })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerDamaged, eventPlayer, eventOtherPlayer), team)
}

export function OnPlayerDeployed(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerDeployed: Player ${mod.GetObjId(eventPlayer)} deployed.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerDeployed, eventPlayer), team)
}

export function OnPlayerDied(
  eventPlayer: mod.Player,
  eventOtherPlayer: mod.Player,
  eventDeathType: mod.DeathType,
  eventWeaponUnlock: mod.WeaponUnlock
): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerDied:`, { eventPlayer, eventOtherPlayer, eventDeathType, eventWeaponUnlock })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerDied, eventPlayer, eventOtherPlayer), team)
}

export function OnPlayerEarnedKill(
  eventPlayer: mod.Player,
  eventOtherPlayer: mod.Player,
  eventDeathType: mod.DeathType,
  eventWeaponUnlock: mod.WeaponUnlock
): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerEarnedKill:`, { eventPlayer, eventOtherPlayer, eventDeathType, eventWeaponUnlock })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerKill, eventPlayer, eventOtherPlayer), team)
}

export function OnPlayerEarnedKillAssist(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerEarnedKillAssist:`, { eventPlayer, eventOtherPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerKillAssist, eventPlayer, eventOtherPlayer), team)
}

export function OnPlayerEnterAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerEnterAreaTrigger: Player entered teleporter.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitedAreaTrigger, eventPlayer, mod.GetObjId(eventAreaTrigger)), team)
}

export function OnPlayerEnterCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerEnterCapturePoint:`, { eventPlayer, eventCapturePoint })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerEnterCP, eventPlayer, mod.GetObjId(eventCapturePoint)), team)
}

export function OnPlayerEnterVehicle(eventPlayer: mod.Player, eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerEnterVehicle:`, { eventPlayer, eventVehicle })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerEnterVeh, eventPlayer, mod.GetObjId(eventVehicle)), team)
}

export function OnPlayerEnterVehicleSeat(
  eventPlayer: mod.Player,
  eventVehicle: mod.Vehicle,
  eventSeat: mod.Object
): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerEnterVehicleSeat:`, { eventPlayer, eventVehicle, eventSeat })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerEnterSeat, eventPlayer, mod.GetObjId(eventVehicle), mod.GetObjId(eventSeat)), team)
}

// This will trigger when a Player exits an AreaTrigger.
export function OnPlayerExitAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerExitAreaTrigger: Player exited teleporter.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitedAreaTrigger, eventPlayer, mod.GetObjId(eventAreaTrigger)), team)
}

export function OnPlayerExitCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerExitCapturePoint:`, { eventPlayer, eventCapturePoint })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitCP, eventPlayer, mod.GetObjId(eventCapturePoint)), team)
}

export function OnPlayerExitVehicle(eventPlayer: mod.Player, eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerExitVehicle:`, { eventPlayer, eventVehicle })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitVeh, eventPlayer, mod.GetObjId(eventVehicle)), team)
}

export function OnPlayerExitVehicleSeat(
  eventPlayer: mod.Player,
  eventVehicle: mod.Vehicle,
  eventSeat: mod.Object
): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerExitVehicleSeat:`, { eventPlayer, eventVehicle, eventSeat })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitSeat, eventPlayer, mod.GetObjId(eventVehicle), mod.GetObjId(eventSeat)), team)
}

// This will trigger when a Player interacts with InteractPoint.
export function OnPlayerInteract(eventPlayer: mod.Player, eventInteractPoint: mod.InteractPoint): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerInteract:`, { eventPlayer, eventInteractPoint })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerInteract, eventPlayer, mod.GetObjId(eventInteractPoint)), team)
}

export function OnPlayerJoinGame(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerJoinGame:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plJoined, eventPlayer), team)
}

export function OnPlayerLeaveGame(eventNumber: number): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerLeaveGame:`, { eventNumber })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plLeft, eventNumber))
}

// This will trigger when a Player changes team.
export function OnPlayerSwitchTeam(eventPlayer: mod.Player, eventTeam: mod.Team): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerSwitchTeam:`, { eventPlayer, eventTeam })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plSwitchTeam, eventPlayer, mod.GetObjId(eventTeam)), team)
}

// This will trigger when a Player interacts with an UI button.
export function OnPlayerUIButtonEvent(
  eventPlayer: mod.Player,
  eventUIWidget: mod.UIWidget,
  eventUIButtonEvent: mod.UIButtonEvent
): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerUIButtonEvent:`, { eventPlayer, eventUIWidget, eventUIButtonEvent })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plUIButton, eventPlayer, mod.GetUIWidgetName(eventUIWidget)), team)
}

// This will trigger when the Player dies and returns to the deploy screen.
export function OnPlayerUndeploy(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerUndeploy:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plUndeploy, eventPlayer), team)
}

// This will trigger when a Raycast hits a target.
export function OnRayCastHit(eventPlayer: mod.Player, eventPoint: mod.Vector, eventNormal: mod.Vector): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnRayCastHit:`, { eventPlayer, eventPoint, eventNormal })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.raycastHit, eventPlayer), team)
}

// This will trigger when a Raycast is called and doesn't hit any target.
export function OnRayCastMissed(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnRayCastMissed:`, { eventPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.raycastMiss, eventPlayer), team)
}

// This will trigger when a Player is revived by another Player.
export function OnRevived(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnRevived:`, { eventPlayer, eventOtherPlayer })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plRevived, eventPlayer, eventOtherPlayer), team)
}

// This will trigger when an AISpawner spawns an AI Soldier.
export function OnSpawnerSpawned(eventPlayer: mod.Player, eventSpawner: mod.Spawner): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnSpawnerSpawned:`, { eventPlayer, eventSpawner })
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.spawnerSpawned, mod.GetObjId(eventSpawner), eventPlayer), team)
}

// This will trigger when the gamemode time limit has been reached.
export function OnTimeLimitReached(): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnTimeLimitReached.`)
}

export function OnVehicleDestroyed(eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnVehicleDestroyed:`, { eventVehicle })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.vehDestroyed, mod.GetObjId(eventVehicle)))
}

export function OnVehicleSpawned(eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnVehicleSpawned:`, { eventVehicle })
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.vehSpawned, mod.GetObjId(eventVehicle)))
}