// app settings keys
const STORAGE_ACCOUNT_NAME_APP_SETTING = 'AZURE_STORAGE_ACCOUNT'
const STORAGE_ACCOUNT_KEY_APP_SETTING = 'AZURE_STORAGE_ACCESS_KEY'
const SENDGRID_API_KEY_APP_SETTING = 'SENDGRID_API_KEY'

// azure queue names
const PROCESS_PODCAST_QUEUE_NAME = 'podcasts-to-process'
const PODCAST_NOTIFICATION_QUEUE_NAME = 'podcasts-to-notify'

// azure storage table names
const PODCAST_PROCESS_REGISTER_TABLE_NAME = 'podcastprocessingregister'


module.exports = {
    // app setting keys
    STORAGE_ACCOUNT_NAME_APP_SETTING,
    STORAGE_ACCOUNT_KEY_APP_SETTING,
    SENDGRID_API_KEY_APP_SETTING,
    // queues
    PROCESS_PODCAST_QUEUE_NAME,
    PODCAST_NOTIFICATION_QUEUE_NAME,
    // tables
    PODCAST_PROCESS_REGISTER_TABLE_NAME
}