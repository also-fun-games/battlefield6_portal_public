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
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIMoveToFailed: ${playerType} ${playerId} failed to reach its destination.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiMoveFail, eventPlayer), team)
}

export function OnAIMoveToRunning(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIMoveToRunning: ${playerType} ${playerId} is moving to its destination.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiMoveRun, eventPlayer), team)
}

export function OnAIMoveToSucceeded(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIMoveToSucceeded: ${playerType} ${playerId} reached its destination successfully.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiMoveSuc, eventPlayer), team)
}

export function OnAIParachuteRunning(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIParachuteRunning: ${playerType} ${playerId} is currently parachuting.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiParaRun, eventPlayer), team)
}

export function OnAIParachuteSucceeded(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIParachuteSucceeded: ${playerType} ${playerId} completed parachute action.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiParaSuc, eventPlayer), team)
}

export function OnAIWaypointIdleFailed(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIWaypointIdleFailed: ${playerType} ${playerId} failed while idling at a waypoint.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiWptFail, eventPlayer), team)
}

export function OnAIWaypointIdleRunning(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIWaypointIdleRunning: ${playerType} ${playerId} is idling at a waypoint.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiWptRun, eventPlayer), team)
}

export function OnAIWaypointIdleSucceeded(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Player`
  console.log(`[${timestamp}] OnAIWaypointIdleSucceeded: ${playerType} ${playerId} completed waypoint idle successfully.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.aiWptSuc, eventPlayer), team)
}

export function OnCapturePointCaptured(eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  const cpId = mod.GetObjId(eventCapturePoint)
  console.log(`[${timestamp}] OnCapturePointCaptured: Capture Point ${cpId} has been captured.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.cpCaptured, mod.GetObjId(eventCapturePoint)))
}

export function OnCapturePointCapturing(eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  const cpId = mod.GetObjId(eventCapturePoint)
  console.log(`[${timestamp}] OnCapturePointCapturing: Capture Point ${cpId} is being captured.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.cpCapturing, mod.GetObjId(eventCapturePoint)))
}

export function OnCapturePointLost(eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  const cpId = mod.GetObjId(eventCapturePoint)
  console.log(`[${timestamp}] OnCapturePointLost: Capture Point ${cpId} has been lost.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.cpLost, mod.GetObjId(eventCapturePoint)))
}

// This will trigger when the gamemode ends.
export function OnGameModeEnding(): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnGameModeEnding: Game mode is ending.`)
}

// This will trigger at the start of the gamemode.
export function OnGameModeStarted(): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnGameModeStarted: Game mode has started.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.gameStarted))
}

// This will trigger when a Player is forced into the mandown state.
export function OnMandown(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const otherPlayerId = mod.GetObjId(eventOtherPlayer)
  const playerType = mod.GetSoldierState(eventPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Human`
  const otherPlayerType = mod.GetSoldierState(eventOtherPlayer, mod.SoldierStateBool.IsAISoldier) ? `AI` : `Human`

  console.log(`[${timestamp}] OnMandown: ${playerType} Player ${playerId} downed ${otherPlayerType} Player ${otherPlayerId}`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerMandown, eventPlayer, eventOtherPlayer), team)
}

export function OnMCOMArmed(eventMCOM: mod.MCOM): void {
  const timestamp = new Date().toISOString()
  const mcomId = mod.GetObjId(eventMCOM)
  console.log(`[${timestamp}] OnMCOMArmed: MCOM ${mcomId} has been armed.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.mcomArmed, mod.GetObjId(eventMCOM)))
}

export function OnMCOMDefused(eventMCOM: mod.MCOM): void {
  const timestamp = new Date().toISOString()
  const mcomId = mod.GetObjId(eventMCOM)
  console.log(`[${timestamp}] OnMCOMDefused: MCOM ${mcomId} has been defused.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.mcomDefused, mod.GetObjId(eventMCOM)))
}

export function OnMCOMDestroyed(eventMCOM: mod.MCOM): void {
  const timestamp = new Date().toISOString()
  const mcomId = mod.GetObjId(eventMCOM)
  console.log(`[${timestamp}] OnMCOMDestroyed: MCOM ${mcomId} has been destroyed.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.mcomDestroyed, mod.GetObjId(eventMCOM)))
}

export function OnPlayerDamaged(
  eventPlayer: mod.Player,
  eventOtherPlayer: mod.Player,
  eventDamageType: mod.DamageType,
  eventWeaponUnlock: mod.WeaponUnlock
): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const otherPlayerId = mod.GetObjId(eventOtherPlayer)

  let damageTypeName = `Unknown`
  if (mod.EventDamageTypeCompare(eventDamageType, mod.PlayerDamageTypes.Default)) damageTypeName = `Default`
  else if (mod.EventDamageTypeCompare(eventDamageType, mod.PlayerDamageTypes.Explosion)) damageTypeName = `Explosion`
  else if (mod.EventDamageTypeCompare(eventDamageType, mod.PlayerDamageTypes.Fall)) damageTypeName = `Fall`
  else if (mod.EventDamageTypeCompare(eventDamageType, mod.PlayerDamageTypes.Fire)) damageTypeName = `Fire`
  else if (mod.EventDamageTypeCompare(eventDamageType, mod.PlayerDamageTypes.Headshot)) damageTypeName = `Headshot`
  else if (mod.EventDamageTypeCompare(eventDamageType, mod.PlayerDamageTypes.Melee)) damageTypeName = `Melee`

  console.log(
    `[${timestamp}] OnPlayerDamaged: Player ${playerId} was damaged by Player ${otherPlayerId} (damage: ${damageTypeName}).`
  )
  
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerDamaged, eventOtherPlayer, eventPlayer), team)
}

export function OnPlayerDeployed(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  console.log(`[${timestamp}] OnPlayerDeployed: Player ${playerId} deployed.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerDeployed, eventPlayer), team)
}

// export function EventDeathTypeCompare(deathType: mod.DeathType, playerDeathTypes: mod.PlayerDeathTypes): boolean {
//   return deathType as number === playerDeathTypes as number
// }

export function OnPlayerDied(
  eventPlayer: mod.Player,
  eventOtherPlayer: mod.Player,
  eventDeathType: mod.DeathType,
  eventWeaponUnlock: mod.WeaponUnlock
): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const otherPlayerId = mod.GetObjId(eventOtherPlayer)
  
  let deathTypeName = `Unknown`
  if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Deserting)) deathTypeName = `Deserting`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Drowning)) deathTypeName = `Drowning`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Explosion)) deathTypeName = `Explosion`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Fall)) deathTypeName = `Fall`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Fire)) deathTypeName = `Fire`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Headshot)) deathTypeName = `Headshot`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Melee)) deathTypeName = `Melee`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Penetration)) deathTypeName = `Penetration`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Redeploy)) deathTypeName = `Redeploy`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Roadkill)) deathTypeName = `Roadkill`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Weapon)) deathTypeName = `Weapon`
  
  console.log(
    `[${timestamp}] OnPlayerEarnedKill: Player ${playerId} killed Player ${otherPlayerId} (death: ${deathTypeName}).`
  )

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
  const playerId = mod.GetObjId(eventPlayer)
  const otherPlayerId = mod.GetObjId(eventOtherPlayer)
  
   let deathTypeName = `Unknown`
  if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Deserting)) deathTypeName = `Deserting`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Drowning)) deathTypeName = `Drowning`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Explosion)) deathTypeName = `Explosion`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Fall)) deathTypeName = `Fall`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Fire)) deathTypeName = `Fire`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Headshot)) deathTypeName = `Headshot`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Melee)) deathTypeName = `Melee`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Penetration)) deathTypeName = `Penetration`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Redeploy)) deathTypeName = `Redeploy`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Roadkill)) deathTypeName = `Roadkill`
  else if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Weapon)) deathTypeName = `Weapon`
  
  console.log(
    `[${timestamp}] OnPlayerEarnedKill: Player ${playerId} killed Player ${otherPlayerId} (death: ${deathTypeName}).`
  )

  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerKill, eventPlayer, eventOtherPlayer), team)
}

export function OnPlayerEarnedKillAssist(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const otherPlayerId = mod.GetObjId(eventOtherPlayer)
  console.log(`[${timestamp}] OnPlayerEarnedKillAssist: Player ${playerId} assisted in the kill of Player ${otherPlayerId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerKillAssist, eventPlayer, eventOtherPlayer), team)
}

export function OnPlayerEnterAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const areaTriggerId = mod.GetObjId(eventAreaTrigger)
  console.log(`[${timestamp}] OnPlayerEnterAreaTrigger: Player ${playerId} entered area trigger ${areaTriggerId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitedAreaTrigger, eventPlayer, mod.GetObjId(eventAreaTrigger)), team)
}

export function OnPlayerEnterCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const cpId = mod.GetObjId(eventCapturePoint)
  console.log(`[${timestamp}] OnPlayerEnterCapturePoint: Player ${playerId} entered Capture Point ${cpId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerEnterCP, eventPlayer, mod.GetObjId(eventCapturePoint)), team)
}

export function OnPlayerEnterVehicle(eventPlayer: mod.Player, eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const vehicleId = mod.GetObjId(eventVehicle)
  console.log(`[${timestamp}] OnPlayerEnterVehicle: Player ${playerId} entered vehicle ${vehicleId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerEnterVeh, eventPlayer, mod.GetObjId(eventVehicle)), team)
}

export function OnPlayerEnterVehicleSeat(
  eventPlayer: mod.Player,
  eventVehicle: mod.Vehicle,
  eventSeat: mod.Object
): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const vehicleId = mod.GetObjId(eventVehicle)
  const seatIndex = mod.GetPlayerVehicleSeat(eventPlayer)
  console.log(
    `[${timestamp}] OnPlayerEnterVehicleSeat: Player ${playerId} entered seat ${seatIndex} of vehicle ${vehicleId}.`
  )
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerEnterSeat, eventPlayer, mod.GetObjId(eventVehicle), mod.GetPlayerVehicleSeat(eventPlayer)), team)
}

// This will trigger when a Player exits an AreaTrigger.
export function OnPlayerExitAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const areaTriggerId = mod.GetObjId(eventAreaTrigger)
  console.log(`[${timestamp}] OnPlayerExitAreaTrigger: Player ${playerId} exited area trigger ${areaTriggerId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitedAreaTrigger, eventPlayer, mod.GetObjId(eventAreaTrigger)), team)
}

export function OnPlayerExitCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const cpId = mod.GetObjId(eventCapturePoint)
  console.log(`[${timestamp}] OnPlayerExitCapturePoint: Player ${playerId} exited Capture Point ${cpId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitCP, eventPlayer, mod.GetObjId(eventCapturePoint)), team)
}

export function OnPlayerExitVehicle(eventPlayer: mod.Player, eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const vehicleId = mod.GetObjId(eventVehicle)
  console.log(`[${timestamp}] OnPlayerExitVehicle: Player ${playerId} exited vehicle ${vehicleId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitVeh, eventPlayer, mod.GetObjId(eventVehicle)), team)
}

export function OnPlayerExitVehicleSeat(
  eventPlayer: mod.Player,
  eventVehicle: mod.Vehicle,
  eventSeat: mod.Object
): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const vehicleId = mod.GetObjId(eventVehicle)
  console.log(
    `[${timestamp}] OnPlayerExitVehicleSeat: Player ${playerId} exited seat of vehicle ${vehicleId}.`
  )
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerExitSeat, eventPlayer, mod.GetObjId(eventVehicle)), team)
}

// This will trigger when a Player interacts with InteractPoint.
export function OnPlayerInteract(eventPlayer: mod.Player, eventInteractPoint: mod.InteractPoint): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const interactId = mod.GetObjId(eventInteractPoint)
  console.log(
    `[${timestamp}] OnPlayerInteract: Player ${playerId} interacted with Interact Point ${interactId}.`
  )
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.playerInteract, eventPlayer, mod.GetObjId(eventInteractPoint)), team)
}

export function OnPlayerJoinGame(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  console.log(`[${timestamp}] OnPlayerJoinGame: Player ${playerId} joined the game.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plJoined, eventPlayer), team)
}

export function OnPlayerLeaveGame(eventNumber: number): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnPlayerLeaveGame: Player slot ${eventNumber} left the game.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plLeft, eventNumber))
}

// This will trigger when a Player changes team.
export function OnPlayerSwitchTeam(eventPlayer: mod.Player, eventTeam: mod.Team): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
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
  const playerId = mod.GetObjId(eventPlayer)
  const widgetName = mod.GetUIWidgetName(eventUIWidget)
  const buttonEventName = String(eventUIButtonEvent)
  console.log(
    `[${timestamp}] OnPlayerUIButtonEvent: Player ${playerId} triggered UI widget ${widgetName} (event: ${buttonEventName}).`
  )
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plUIButton, eventPlayer, mod.GetUIWidgetName(eventUIWidget)), team)
}

// This will trigger when the Player dies and returns to the deploy screen.
export function OnPlayerUndeploy(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  console.log(`[${timestamp}] OnPlayerUndeploy: Player ${playerId} undeployed and returned to deploy screen.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plUndeploy, eventPlayer), team)
}

// This will trigger when a Raycast hits a target.
export function OnRayCastHit(eventPlayer: mod.Player, eventPoint: mod.Vector, eventNormal: mod.Vector): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  
  // Safely extract and format components
  const px = eventPoint ? mod.XComponentOf(eventPoint).toFixed(2) : `NaN`
  const py = eventPoint ? mod.YComponentOf(eventPoint).toFixed(2) : `NaN`
  const pz = eventPoint ? mod.ZComponentOf(eventPoint).toFixed(2) : `NaN`
  const nx = eventNormal ? mod.XComponentOf(eventNormal).toFixed(2) : `NaN`
  const ny = eventNormal ? mod.YComponentOf(eventNormal).toFixed(2) : `NaN`
  const nz = eventNormal ? mod.ZComponentOf(eventNormal).toFixed(2) : `NaN`

  const pointStr = `(${px}, ${py}, ${pz})`
  const normalStr = `(${nx}, ${ny}, ${nz})`

  console.log(
    `[${timestamp}] OnRayCastHit: Player ${playerId} raycast hit at point ${pointStr} with normal ${normalStr}.`
  )
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.raycastHit, eventPlayer), team)
}

// This will trigger when a Raycast is called and doesn't hit any target.
export function OnRayCastMissed(eventPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  console.log(`[${timestamp}] OnRayCastMissed: Player ${playerId} raycast missed all targets.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.raycastMiss, eventPlayer), team)
}

// This will trigger when a Player is revived by another Player.
export function OnRevived(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const reviverId = mod.GetObjId(eventOtherPlayer)
  console.log(`[${timestamp}] OnRevived: Player ${playerId} was revived by Player ${reviverId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.plRevived, eventPlayer, eventOtherPlayer), team)
}

// This will trigger when an AISpawner spawns an AI Soldier.
export function OnSpawnerSpawned(eventPlayer: mod.Player, eventSpawner: mod.Spawner): void {
  const timestamp = new Date().toISOString()
  const playerId = mod.GetObjId(eventPlayer)
  const spawnerId = mod.GetObjId(eventSpawner)
  console.log(`[${timestamp}] OnSpawnerSpawned: AI Player ${playerId} spawned by spawner ${spawnerId}.`)
  const team = mod.GetTeam(eventPlayer)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.spawnerSpawned, mod.GetObjId(eventSpawner), eventPlayer), team)
}

// This will trigger when the gamemode time limit has been reached.
export function OnTimeLimitReached(): void {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] OnTimeLimitReached: Time limit for the game mode has been reached.`)
}

export function OnVehicleDestroyed(eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  const vehicleId = mod.GetObjId(eventVehicle)
  console.log(`[${timestamp}] OnVehicleDestroyed: Vehicle ${vehicleId} was destroyed.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.vehDestroyed, mod.GetObjId(eventVehicle)))
}

export function OnVehicleSpawned(eventVehicle: mod.Vehicle): void {
  const timestamp = new Date().toISOString()
  const vehicleId = mod.GetObjId(eventVehicle)
  console.log(`[${timestamp}] OnVehicleSpawned: Vehicle ${vehicleId} has spawned.`)
  mod.DisplayHighlightedWorldLogMessage(mod.Message(mod.stringkeys.vehSpawned, mod.GetObjId(eventVehicle)))
}