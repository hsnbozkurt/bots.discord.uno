export interface SearchResults {
  results: Result[]
  num_pages: number
  counts_by_category: CountsByCategory
  result_count: number
  type: number
  load_id: string
}

export interface Result {
  type: number
  data: SearchData
}

export interface SearchData {
  id: string
  name: string
  icon: string
  description: string
  summary: string
  type?: number
  is_monetized: boolean
  cover_image?: string
  primary_sku_id?: string
  bot: Bot
  hook: boolean
  slug?: string
  guild_id: string
  storefront_available: boolean
  bot_public: boolean
  bot_require_code_grant: boolean
  terms_of_service_url: string
  privacy_policy_url: string
  install_params?: InstallParams
  integration_types_config: IntegrationTypesConfig
  verify_key: string
  flags: number
  guild: Guild
  tags: string[]
  categories: Category[]
  directory_entry: DirectoryEntry
  primary_sku?: PrimarySku
  custom_install_url?: string
}

export interface N0 {
  oauth2_install_params?: Oauth2InstallParams
}

export interface Guild {
  id: string
  name: string
  icon: string
  description?: string
  home_header?: string
  splash?: string
  discovery_splash?: string
  features: string[]
  approximate_member_count: number
  approximate_presence_count: number
}


export interface DirectoryEntry {
  guild_count: number
  detailed_description?: string
  carousel_items?: CarouselItem[]
  supported_locales: string[]
  external_urls?: ExternalUrl[]
  popular_application_command_ids: string[]
  popular_application_commands: PopularApplicationCommand[]
  short_description: string
}



export interface PopularApplicationCommand {
  id: string
  application_id: string
  version: string
  default_member_permissions?: string
  type: number
  nsfw: boolean
  name: string
  description: string
  dm_permission: boolean
  contexts: number[] | null
  integration_types: number[]
  options?: Option[]
  description_localized?: string
  name_localized?: string
}

export interface Option {
  type: number
  name: string
  name_localized?: string
  description: string
  description_localized?: string
  options?: OptionOption[]
  required?: boolean
  autocomplete?: boolean
  choices?: Choice2[]
  max_length?: number
  channel_types?: number[]
  min_value?: number
  max_value?: number
}

export interface OptionOption {
  type: number
  name: string
  description: string
  required?: boolean
  description_localized?: string
  max_length?: number
  options?: OptionOpitonOption[]
  name_localized?: string
  choices?: Choice[]
  channel_types?: number[]
}

export interface OptionOpitonOption {
  type: number
  name: string
  description: string
  required: boolean
}

export interface Choice {
  name: string
  value: string
}

export interface PrimarySku {
  id: string
  type: number
  product_line: number
  dependent_sku_id: string
  application_id: string
  manifest_labels: any
  access_type: number
  name: string
  features: any[]
  release_date: any
  premium: boolean
  slug: string
  flags: number
}

export interface CountsByCategory {
  "1": number
  "2": number
  "3": number
  "4": number
  "5": number
  "6": number
  "7": number
  "8": number
  "9": number
  "10": number
}

export type Collections = Collection[]

export interface Collection {
  id: string
  active: boolean
  type: number
  position: number
  title: string
  description: string
  application_directory_collection_items: ApplicationDirectoryCollectionItem[]
}

export interface ApplicationDirectoryCollectionItem {
  id: string
  type: number
  image_hash?: string
  position: number
  application: Application
}

export interface Application {
  id: string
  name: string
  icon: string
  description: string
  summary: string
  type?: number
  is_monetized: boolean
  primary_sku_id?: string
  bot: Bot
  hook: boolean
  slug?: string
  guild_id: string
  storefront_available: boolean
  bot_public: boolean
  bot_require_code_grant: boolean
  terms_of_service_url: string
  privacy_policy_url: string
  custom_install_url?: string
  integration_types_config: IntegrationTypesConfig
  verify_key: string
  flags: number
  tags: string[]
  categories: Category[]
  directory_entry: DirectoryEntry
  install_params?: InstallParams
  cover_image?: string
}
export interface AvatarDecorationData {
    asset: string
    skuid: string
}
export interface Bot {
  id: string
  username: string
  global_name: null | string
  avatar: string
  avatar_decoration_data: null | AvatarDecorationData
  discriminator: string
  public_flags: number
  clan: null
  bot: boolean
  banner?: string
  banner_color: null | string
  accent_color: null | string
}

export interface IntegrationTypesConfig {
  "0": N0
  "1"?: N1
}

export interface N0 {
  oauth2_install_params?: Oauth2InstallParams
}

export interface Oauth2InstallParams {
  scopes: string[]
  permissions: string
}

export interface N1 {
  oauth2_install_params: Oauth2InstallParams2
}

export interface Oauth2InstallParams2 {
  scopes: string[]
  permissions: string
}

export interface Category {
  id: number
  name: string
}

export interface DirectoryEntry {
  guild_count: number
  detailed_description?: string
  supported_locales: string[]
  external_urls: ExternalUrl[]
  popular_application_command_ids: string[]
  short_description: string
  carousel_items?: CarouselItem[]
}

export interface ExternalUrl {
  name: string
  url: string
}

export interface CarouselItem {
  type: number
  url: string
  proxy_url?: string
}

export interface InstallParams {
  scopes: string[]
  permissions: string
}
