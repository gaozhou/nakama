// tslint:disable
/* Code generated automatically DO NOT EDIT. */
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const DEFAULT_HOST = 'http://127.0.0.1:7351';
const DEFAULT_TIMEOUT_MS = 5000;

export class ConfigParams {
  host: string
  timeoutMs: number
}

@Injectable({providedIn: 'root'})
export class DeveloperConsole {
  private readonly config;

  constructor(private httpClient: HttpClient, @Optional() config: ConfigParams) {
    const defaultConfig: ConfigParams = {
      host: DEFAULT_HOST,
      timeoutMs: DEFAULT_TIMEOUT_MS,
    };
    this.config = config || defaultConfig;
  }

  public authenticate(username: string, password: string): Observable<ConsoleSession> {
    const urlPath = `/v2/console/authenticate`;
    let params = new HttpParams();
    return this.httpClient.post<ConsoleSession>(this.config.host + urlPath, { params: params, headers: this.getBasicAuthHeaders(username, password) })
  }

  public banUser(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/ban`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public deleteAccount(auth_token: string, id: string, record_deletion: boolean): Observable<any> {
    const urlPath = `/v2/console/account/${id}`;
    let params = new HttpParams();
	  if (record_deletion) {
		  params = params.set('record_deletion', String(record_deletion));
	  }
    return this.httpClient.delete(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public deleteFriend(auth_token: string, id: string, friend_id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/friend/${friend_id}`;
    let params = new HttpParams();
    return this.httpClient.delete(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public deleteGroupUser(auth_token: string, id: string, group_id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/group/${group_id}`;
    let params = new HttpParams();
    return this.httpClient.delete(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public deleteStorage(auth_token: string): Observable<any> {
    const urlPath = `/v2/console/storage`;
    let params = new HttpParams();
    return this.httpClient.delete(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public deleteStorageObject(auth_token: string, collection: string, key: string, user_id: string, version: string): Observable<any> {
    const urlPath = `/v2/console/storage/${collection}/${key}/${user_id}`;
    let params = new HttpParams();
	  if (version) {
		  params = params.set('version', version);
	  }
    return this.httpClient.delete(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public deleteUsers(auth_token: string): Observable<any> {
    const urlPath = `/v2/console/user`;
    let params = new HttpParams();
    return this.httpClient.delete(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public deleteWalletLedger(auth_token: string, id: string, wallet_id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/wallet/${wallet_id}`;
    let params = new HttpParams();
    return this.httpClient.delete(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public exportAccount(auth_token: string, id: string): Observable<AccountExport> {
    const urlPath = `/v2/console/account/${id}/export`;
    let params = new HttpParams();
    return this.httpClient.get<AccountExport>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public getAccount(auth_token: string, id: string): Observable<Account> {
    const urlPath = `/v2/console/account/${id}`;
    let params = new HttpParams();
    return this.httpClient.get<Account>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public getConfig(auth_token: string): Observable<Config> {
    const urlPath = `/v2/console/config`;
    let params = new HttpParams();
    return this.httpClient.get<Config>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public getFriends(auth_token: string, id: string): Observable<ApiFriendList> {
    const urlPath = `/v2/console/account/${id}/friend`;
    let params = new HttpParams();
    return this.httpClient.get<ApiFriendList>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public getGroups(auth_token: string, id: string): Observable<ApiUserGroupList> {
    const urlPath = `/v2/console/account/${id}/group`;
    let params = new HttpParams();
    return this.httpClient.get<ApiUserGroupList>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public getStatus(auth_token: string): Observable<StatusList> {
    const urlPath = `/v2/console/status`;
    let params = new HttpParams();
    return this.httpClient.get<StatusList>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public getStorage(auth_token: string, collection: string, key: string, user_id: string): Observable<ApiStorageObject> {
    const urlPath = `/v2/console/storage/${collection}/${key}/${user_id}`;
    let params = new HttpParams();
    return this.httpClient.get<ApiStorageObject>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public getWalletLedger(auth_token: string, id: string): Observable<WalletLedgerList> {
    const urlPath = `/v2/console/account/${id}/wallet`;
    let params = new HttpParams();
    return this.httpClient.get<WalletLedgerList>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public listStorage(auth_token: string, user_id: string): Observable<StorageList> {
    const urlPath = `/v2/console/storage`;
    let params = new HttpParams();
	  if (user_id) {
		  params = params.set('user_id', user_id);
	  }
    return this.httpClient.get<StorageList>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public listUsers(auth_token: string, filter: string, banned: boolean, tombstones: boolean): Observable<UserList> {
    const urlPath = `/v2/console/user`;
    let params = new HttpParams();
	  if (filter) {
		  params = params.set('filter', filter);
	  }
	  if (banned) {
		  params = params.set('banned', String(banned));
	  }
	  if (tombstones) {
		  params = params.set('tombstones', String(tombstones));
	  }
    return this.httpClient.get<UserList>(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unbanUser(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unban`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkCustom(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/custom`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkDevice(auth_token: string, id: string, body: UnlinkDeviceRequest): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/device`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, body, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkEmail(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/email`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkFacebook(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/facebook`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkFacebookInstantGame(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/facebookinstantgame`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkGameCenter(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/gamecenter`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkGoogle(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/google`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public unlinkSteam(auth_token: string, id: string): Observable<any> {
    const urlPath = `/v2/console/account/${id}/unlink/steam`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public updateAccount(auth_token: string, id: string, body: UpdateAccountRequest): Observable<any> {
    const urlPath = `/v2/console/account/${id}`;
    let params = new HttpParams();
    return this.httpClient.post(this.config.host + urlPath, body, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  public writeStorageObject(auth_token: string, collection: string, key: string, user_id: string, body: WriteStorageObjectRequest): Observable<ApiStorageObjectAck> {
    const urlPath = `/v2/console/storage/${collection}/${key}/${user_id}`;
    let params = new HttpParams();
    return this.httpClient.put<ApiStorageObjectAck>(this.config.host + urlPath, body, { params: params, headers: this.getTokenAuthHeaders(auth_token) })
  }

  private getTokenAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  private getBasicAuthHeaders(username: string, password: string): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password));
  }
}

export interface ApiAccount {
  user?: ApiUser
  wallet?: string
  email?: string
  devices?: Array<ApiAccountDevice>
  custom_id?: string
  verify_time?: string
}

export interface ApiAccountDevice {
  id?: string
  vars?: Array<AccountDeviceVarsEntry>
}

export interface AccountDeviceVarsEntry {
  key?: string
  value?: string
}

export interface ApiChannelMessage {
  channel_id?: string
  message_id?: string
  code?: number
  sender_id?: string
  username?: string
  content?: string
  create_time?: string
  update_time?: string
  persistent?: boolean
  room_name?: string
  group_id?: string
  user_id_one?: string
  user_id_two?: string
}

export interface ApiFriend {
  user?: ApiUser
  state?: number
}

export interface ApiFriendList {
  friends?: Array<ApiFriend>
  cursor?: string
}

export interface ApiGroup {
  id?: string
  creator_id?: string
  name?: string
  description?: string
  lang_tag?: string
  metadata?: string
  avatar_url?: string
  open?: boolean
  edge_count?: number
  max_count?: number
  create_time?: string
  update_time?: string
}

export interface ApiLeaderboardRecord {
  leaderboard_id?: string
  owner_id?: string
  username?: string
  score?: string
  subscore?: string
  num_score?: number
  metadata?: string
  create_time?: string
  update_time?: string
  expiry_time?: string
  rank?: string
  max_num_score?: number
}

export interface ApiNotification {
  id?: string
  subject?: string
  content?: string
  code?: number
  sender_id?: string
  create_time?: string
  persistent?: boolean
}

export interface ApiReadStorageObjectId {
  collection?: string
  key?: string
  user_id?: string
}

export interface ApiStorageObject {
  collection?: string
  key?: string
  user_id?: string
  value?: string
  version?: string
  permission_read?: number
  permission_write?: number
  create_time?: string
  update_time?: string
}

export interface ApiStorageObjectAck {
  collection?: string
  key?: string
  version?: string
  user_id?: string
}

export interface ApiUser {
  id?: string
  username?: string
  display_name?: string
  avatar_url?: string
  lang_tag?: string
  location?: string
  timezone?: string
  metadata?: string
  facebook_id?: string
  google_id?: string
  gamecenter_id?: string
  steam_id?: string
  online?: boolean
  edge_count?: number
  create_time?: string
  update_time?: string
  facebook_instant_game_id?: string
}

export interface ApiUserGroupList {
  user_groups?: Array<UserGroupListUserGroup>
  cursor?: string
}

export interface UserGroupListUserGroup {
  group?: ApiGroup
  state?: number
}

export interface Account {
  account?: ApiAccount
  disable_time?: string
}

export interface AccountDeleteRequest {
  id?: string
  record_deletion?: boolean
}

export interface AccountExport {
  account?: ApiAccount
  objects?: Array<ApiStorageObject>
  friends?: Array<ApiFriend>
  groups?: Array<ApiGroup>
  messages?: Array<ApiChannelMessage>
  leaderboard_records?: Array<ApiLeaderboardRecord>
  notifications?: Array<ApiNotification>
  wallet_ledgers?: Array<WalletLedger>
}

export interface AccountId {
  id?: string
}

export interface AuthenticateRequest {
  username?: string
  password?: string
}

export interface Config {
  config?: string
  warnings?: Array<ConfigWarning>
  server_version?: string
}

export interface ConfigWarning {
  field?: string
  message?: string
}

export interface ConsoleSession {
  token?: string
}

export interface DeleteFriendRequest {
  id?: string
  friend_id?: string
}

export interface DeleteGroupUserRequest {
  id?: string
  group_id?: string
}

export interface DeleteStorageObjectRequest {
  collection?: string
  key?: string
  user_id?: string
  version?: string
}

export interface DeleteWalletLedgerRequest {
  id?: string
  wallet_id?: string
}

export interface ListStorageRequest {
  user_id?: string
}

export interface ListUsersRequest {
  filter?: string
  banned?: boolean
  tombstones?: boolean
}

export interface StatusList {
  nodes?: Array<StatusListStatus>
}

export interface StatusListStatus {
  name?: string
  health?: number
  session_count?: number
  presence_count?: number
  match_count?: number
  goroutine_count?: number
  avg_latency_ms?: number
  avg_rate_sec?: number
  avg_input_kbs?: number
  avg_output_kbs?: number
}

export interface StorageList {
  objects?: Array<ApiStorageObject>
  total_count?: number
}

export interface UnlinkDeviceRequest {
  device_id?: string
}

export interface UpdateAccountRequest {
  username?: string
  display_name?: string
  metadata?: string
  avatar_url?: string
  lang_tag?: string
  location?: string
  timezone?: string
  custom_id?: string
  email?: string
  password?: string
  device_ids?: Array<UpdateAccountRequestDeviceIdsEntry>
  wallet?: string
}

export interface UpdateAccountRequestDeviceIdsEntry {
  key?: string
  value?: string
}

export interface UserList {
  users?: Array<ApiUser>
  total_count?: number
}

export interface WalletLedger {
  id?: string
  user_id?: string
  changeset?: string
  metadata?: string
  create_time?: string
  update_time?: string
}

export interface WalletLedgerList {
  items?: Array<WalletLedger>
}

export interface WriteStorageObjectRequest {
  key?: string
  user_id?: string
  value?: string
  version?: string
  permission_read?: number
  permission_write?: number
}