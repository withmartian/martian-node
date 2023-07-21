/* tslint:disable */
/* eslint-disable */
/**
 * OpenAI API
 * APIs for sampling from and fine-tuning language models
 *
 * The version of the OpenAPI document: 1.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from './configuration'
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import globalAxios from 'axios'
// Some imports not used depending on template conditions
// @ts-ignore
import {
    DUMMY_BASE_URL,
    assertParamExists,
    setSearchParams,
    serializeDataIfNeeded,
    toPathString,
    createRequestFunction,
} from './common'
import type { RequestArgs } from './base'
// @ts-ignore
import { BASE_PATH, BaseAPI } from './base'

/**
 *
 * @export
 * @interface ChatCompletionFunctions
 */
export interface ChatCompletionFunctions {
    /**
     * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
     * @type {string}
     * @memberof ChatCompletionFunctions
     */
    name: string
    /**
     * The description of what the function does.
     * @type {string}
     * @memberof ChatCompletionFunctions
     */
    description?: string
    /**
     * The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/gpt/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
     * @type {{ [key: string]: any; }}
     * @memberof ChatCompletionFunctions
     */
    parameters?: { [key: string]: any }
}
/**
 *
 * @export
 * @interface ChatCompletionRequestMessage
 */
export interface ChatCompletionRequestMessage {
    /**
     * The role of the messages author. One of `system`, `user`, `assistant`, or `function`.
     * @type {string}
     * @memberof ChatCompletionRequestMessage
     */
    role: ChatCompletionRequestMessageRoleEnum
    /**
     * The contents of the message. `content` is required for all messages except assistant messages with function calls.
     * @type {string}
     * @memberof ChatCompletionRequestMessage
     */
    content?: string
    /**
     * The name of the author of this message. `name` is required if role is `function`, and it should be the name of the function whose response is in the `content`. May contain a-z, A-Z, 0-9, and underscores, with a maximum length of 64 characters.
     * @type {string}
     * @memberof ChatCompletionRequestMessage
     */
    name?: string
    /**
     *
     * @type {ChatCompletionRequestMessageFunctionCall}
     * @memberof ChatCompletionRequestMessage
     */
    function_call?: ChatCompletionRequestMessageFunctionCall
}

export const ChatCompletionRequestMessageRoleEnum = {
    System: 'system',
    User: 'user',
    Assistant: 'assistant',
    Function: 'function',
} as const

export type ChatCompletionRequestMessageRoleEnum =
    (typeof ChatCompletionRequestMessageRoleEnum)[keyof typeof ChatCompletionRequestMessageRoleEnum]

/**
 * The name and arguments of a function that should be called, as generated by the model.
 * @export
 * @interface ChatCompletionRequestMessageFunctionCall
 */
export interface ChatCompletionRequestMessageFunctionCall {
    /**
     * The name of the function to call.
     * @type {string}
     * @memberof ChatCompletionRequestMessageFunctionCall
     */
    name?: string
    /**
     * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
     * @type {string}
     * @memberof ChatCompletionRequestMessageFunctionCall
     */
    arguments?: string
}
/**
 *
 * @export
 * @interface ChatCompletionResponseMessage
 */
export interface ChatCompletionResponseMessage {
    /**
     * The role of the author of this message.
     * @type {string}
     * @memberof ChatCompletionResponseMessage
     */
    role: ChatCompletionResponseMessageRoleEnum
    /**
     * The contents of the message.
     * @type {string}
     * @memberof ChatCompletionResponseMessage
     */
    content?: string
    /**
     *
     * @type {ChatCompletionRequestMessageFunctionCall}
     * @memberof ChatCompletionResponseMessage
     */
    function_call?: ChatCompletionRequestMessageFunctionCall
}

export const ChatCompletionResponseMessageRoleEnum = {
    System: 'system',
    User: 'user',
    Assistant: 'assistant',
    Function: 'function',
} as const

export type ChatCompletionResponseMessageRoleEnum =
    (typeof ChatCompletionResponseMessageRoleEnum)[keyof typeof ChatCompletionResponseMessageRoleEnum]
/**
 *
 * @export
 * @interface CreateChatCompletionRequest
 */
export interface CreateChatCompletionRequest {
    /**
     * ID of the model to use. See the [model endpoint compatibility](/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API.
     * @type {string}
     * @memberof CreateChatCompletionRequest
     */
    model?: string
    /**
     * A list of messages comprising the conversation so far. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_format_inputs_to_ChatGPT_models.ipynb).
     * @type {Array<ChatCompletionRequestMessage>}
     * @memberof CreateChatCompletionRequest
     */
    messages: Array<ChatCompletionRequestMessage>
    /**
     * A list of functions the model may generate JSON inputs for.
     * @type {Array<ChatCompletionFunctions>}
     * @memberof CreateChatCompletionRequest
     */
    functions?: Array<ChatCompletionFunctions>
    /**
     *
     * @type {CreateChatCompletionRequestFunctionCall}
     * @memberof CreateChatCompletionRequest
     */
    function_call?: CreateChatCompletionRequestFunctionCall
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both.
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    temperature?: number | null
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    top_p?: number | null
    /**
     * How many chat completion choices to generate for each input message.
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    n?: number | null
    /**
     * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     * @type {boolean}
     * @memberof CreateChatCompletionRequest
     */
    stream?: boolean | null
    /**
     *
     * @type {CreateChatCompletionRequestStop}
     * @memberof CreateChatCompletionRequest
     */
    stop?: CreateChatCompletionRequestStop
    /**
     * The maximum number of [tokens](/tokenizer) to generate in the chat completion.  The total length of input tokens and generated tokens is limited by the model\'s context length. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    max_tokens?: number
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    presence_penalty?: number | null
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
     * @type {number}
     * @memberof CreateChatCompletionRequest
     */
    frequency_penalty?: number | null
    /**
     * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
     * @type {object}
     * @memberof CreateChatCompletionRequest
     */
    logit_bias?: object | null
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     * @type {string}
     * @memberof CreateChatCompletionRequest
     */
    user?: string
}
/**
 * @type CreateChatCompletionRequestFunctionCall
 * Controls how the model responds to function calls. \"none\" means the model does not call a function, and responds to the end-user. \"auto\" means the model can pick between an end-user or calling a function.  Specifying a particular function via `{\"name\":\\ \"my_function\"}` forces the model to call that function. \"none\" is the default when no functions are present. \"auto\" is the default if functions are present.
 * @export
 */
export type CreateChatCompletionRequestFunctionCall =
    | CreateChatCompletionRequestFunctionCallOneOf
    | string

/**
 *
 * @export
 * @interface CreateChatCompletionRequestFunctionCallOneOf
 */
export interface CreateChatCompletionRequestFunctionCallOneOf {
    /**
     * The name of the function to call.
     * @type {string}
     * @memberof CreateChatCompletionRequestFunctionCallOneOf
     */
    name: string
}
/**
 * @type CreateChatCompletionRequestStop
 * Up to 4 sequences where the API will stop generating further tokens.
 * @export
 */
export type CreateChatCompletionRequestStop = Array<string> | string

/**
 *
 * @export
 * @interface CreateChatCompletionResponse
 */
export interface CreateChatCompletionResponse {
    /**
     *
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    id: string
    /**
     *
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    object: string
    /**
     *
     * @type {number}
     * @memberof CreateChatCompletionResponse
     */
    created: number
    /**
     *
     * @type {string}
     * @memberof CreateChatCompletionResponse
     */
    model?: string
    /**
     *
     * @type {Array<CreateChatCompletionResponseChoicesInner>}
     * @memberof CreateChatCompletionResponse
     */
    choices: Array<CreateChatCompletionResponseChoicesInner>
    /**
     *
     * @type {CreateCompletionResponseUsage}
     * @memberof CreateChatCompletionResponse
     */
    usage?: CreateCompletionResponseUsage
}
/**
 *
 * @export
 * @interface CreateChatCompletionResponseChoicesInner
 */
export interface CreateChatCompletionResponseChoicesInner {
    /**
     *
     * @type {number}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    index?: number
    /**
     *
     * @type {ChatCompletionResponseMessage}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    message?: ChatCompletionResponseMessage
    /**
     *
     * @type {string}
     * @memberof CreateChatCompletionResponseChoicesInner
     */
    finish_reason?: string
}
/**
 *
 * @export
 * @interface CreateCompletionRequest
 */
export interface CreateCompletionRequest {
    /**
     * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
     * @type {string}
     * @memberof CreateCompletionRequest
     */
    model?: string
    /**
     *
     * @type {CreateCompletionRequestPrompt}
     * @memberof CreateCompletionRequest
     */
    prompt?: CreateCompletionRequestPrompt | null
    /**
     * The suffix that comes after a completion of inserted text.
     * @type {string}
     * @memberof CreateCompletionRequest
     */
    suffix?: string | null
    /**
     * The maximum number of [tokens](/tokenizer) to generate in the completion.  The token count of your prompt plus `max_tokens` cannot exceed the model\'s context length. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    max_tokens?: number | null
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both.
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    temperature?: number | null
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    top_p?: number | null
    /**
     * How many completions to generate for each prompt.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    n?: number | null
    /**
     * Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     * @type {boolean}
     * @memberof CreateCompletionRequest
     */
    stream?: boolean | null
    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.  The maximum value for `logprobs` is 5.
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    logprobs?: number | null
    /**
     * Echo back the prompt in addition to the completion
     * @type {boolean}
     * @memberof CreateCompletionRequest
     */
    echo?: boolean | null
    /**
     *
     * @type {CreateCompletionRequestStop}
     * @memberof CreateCompletionRequest
     */
    stop?: CreateCompletionRequestStop | null
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    presence_penalty?: number | null
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    frequency_penalty?: number | null
    /**
     * Generates `best_of` completions server-side and returns the \"best\" (the one with the highest log probability per token). Results cannot be streamed.  When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     * @type {number}
     * @memberof CreateCompletionRequest
     */
    best_of?: number | null
    /**
     * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  As an example, you can pass `{\"50256\": -100}` to prevent the <|endoftext|> token from being generated.
     * @type {object}
     * @memberof CreateCompletionRequest
     */
    logit_bias?: object | null
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     * @type {string}
     * @memberof CreateCompletionRequest
     */
    user?: string
}
/**
 * @type CreateCompletionRequestPrompt
 * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.  Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
 * @export
 */
export type CreateCompletionRequestPrompt =
    | Array<any>
    | Array<number>
    | Array<string>
    | string

/**
 * @type CreateCompletionRequestStop
 * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
 * @export
 */
export type CreateCompletionRequestStop = Array<string> | string

/**
 *
 * @export
 * @interface CreateCompletionResponse
 */
export interface CreateCompletionResponse {
    /**
     *
     * @type {string}
     * @memberof CreateCompletionResponse
     */
    id: string
    /**
     *
     * @type {string}
     * @memberof CreateCompletionResponse
     */
    object: string
    /**
     *
     * @type {number}
     * @memberof CreateCompletionResponse
     */
    created: number
    /**
     *
     * @type {string}
     * @memberof CreateCompletionResponse
     */
    model?: string
    /**
     *
     * @type {Array<CreateCompletionResponseChoicesInner>}
     * @memberof CreateCompletionResponse
     */
    choices: Array<CreateCompletionResponseChoicesInner>
    /**
     *
     * @type {CreateCompletionResponseUsage}
     * @memberof CreateCompletionResponse
     */
    usage?: CreateCompletionResponseUsage
}
/**
 *
 * @export
 * @interface CreateCompletionResponseChoicesInner
 */
export interface CreateCompletionResponseChoicesInner {
    /**
     *
     * @type {string}
     * @memberof CreateCompletionResponseChoicesInner
     */
    text?: string
    /**
     *
     * @type {number}
     * @memberof CreateCompletionResponseChoicesInner
     */
    index?: number
    /**
     *
     * @type {CreateCompletionResponseChoicesInnerLogprobs}
     * @memberof CreateCompletionResponseChoicesInner
     */
    logprobs?: CreateCompletionResponseChoicesInnerLogprobs | null
    /**
     *
     * @type {string}
     * @memberof CreateCompletionResponseChoicesInner
     */
    finish_reason?: string
}
/**
 *
 * @export
 * @interface CreateCompletionResponseChoicesInnerLogprobs
 */
export interface CreateCompletionResponseChoicesInnerLogprobs {
    /**
     *
     * @type {Array<string>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    tokens?: Array<string>
    /**
     *
     * @type {Array<number>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    token_logprobs?: Array<number>
    /**
     *
     * @type {Array<object>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    top_logprobs?: Array<object>
    /**
     *
     * @type {Array<number>}
     * @memberof CreateCompletionResponseChoicesInnerLogprobs
     */
    text_offset?: Array<number>
}
/**
 *
 * @export
 * @interface CreateCompletionResponseUsage
 */
export interface CreateCompletionResponseUsage {
    /**
     *
     * @type {number}
     * @memberof CreateCompletionResponseUsage
     */
    prompt_tokens: number
    /**
     *
     * @type {number}
     * @memberof CreateCompletionResponseUsage
     */
    completion_tokens: number
    /**
     *
     * @type {number}
     * @memberof CreateCompletionResponseUsage
     */
    total_tokens: number
}
/**
 * OpenAIApi - axios parameter creator
 * @export
 */
export const OpenAIApiAxiosParamCreator = function (
    configuration?: Configuration,
) {
    return {
        /**
         *
         * @summary Creates a model response for the given chat conversation.
         * @param {CreateChatCompletionRequest} createChatCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChatCompletion: async (
            createChatCompletionRequest: CreateChatCompletionRequest,
            options: AxiosRequestConfig = {},
        ): Promise<RequestArgs> => {
            // verify required parameter 'createChatCompletionRequest' is not null or undefined
            assertParamExists(
                'createChatCompletion',
                'createChatCompletionRequest',
                createChatCompletionRequest,
            )
            const localVarPath = `/chat/completions`
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
            let baseOptions
            if (configuration) {
                baseOptions = configuration.baseOptions
            }

            const localVarRequestOptions = {
                method: 'POST',
                ...baseOptions,
                ...options,
            }
            const localVarHeaderParameter = {} as any
            const localVarQueryParameter = {} as any

            localVarHeaderParameter['Content-Type'] = 'application/json'

            setSearchParams(localVarUrlObj, localVarQueryParameter)
            let headersFromBaseOptions =
                baseOptions && baseOptions.headers ? baseOptions.headers : {}
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            }
            localVarRequestOptions.data = serializeDataIfNeeded(
                createChatCompletionRequest,
                localVarRequestOptions,
                configuration,
            )

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            }
        },
        /**
         *
         * @summary Creates a completion for the provided prompt and parameters.
         * @param {CreateCompletionRequest} createCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompletion: async (
            createCompletionRequest: CreateCompletionRequest,
            options: AxiosRequestConfig = {},
        ): Promise<RequestArgs> => {
            // verify required parameter 'createCompletionRequest' is not null or undefined
            assertParamExists(
                'createCompletion',
                'createCompletionRequest',
                createCompletionRequest,
            )
            const localVarPath = `/completions`
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
            let baseOptions
            if (configuration) {
                baseOptions = configuration.baseOptions
            }

            const localVarRequestOptions = {
                method: 'POST',
                ...baseOptions,
                ...options,
            }
            const localVarHeaderParameter = {} as any
            const localVarQueryParameter = {} as any

            localVarHeaderParameter['Content-Type'] = 'application/json'

            setSearchParams(localVarUrlObj, localVarQueryParameter)
            let headersFromBaseOptions =
                baseOptions && baseOptions.headers ? baseOptions.headers : {}
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            }
            localVarRequestOptions.data = serializeDataIfNeeded(
                createCompletionRequest,
                localVarRequestOptions,
                configuration,
            )

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            }
        },
    }
}

/**
 * OpenAIApi - functional programming interface
 * @export
 */
export const OpenAIApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = OpenAIApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Creates a model response for the given chat conversation.
         * @param {CreateChatCompletionRequest} createChatCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createChatCompletion(
            createChatCompletionRequest: CreateChatCompletionRequest,
            options?: AxiosRequestConfig,
        ): Promise<
            (
                axios?: AxiosInstance,
                basePath?: string,
            ) => AxiosPromise<CreateChatCompletionResponse>
        > {
            const localVarAxiosArgs =
                await localVarAxiosParamCreator.createChatCompletion(
                    createChatCompletionRequest,
                    options,
                )
            return createRequestFunction(
                localVarAxiosArgs,
                globalAxios,
                BASE_PATH,
                configuration,
            )
        },
        /**
         *
         * @summary Creates a completion for the provided prompt and parameters.
         * @param {CreateCompletionRequest} createCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompletion(
            createCompletionRequest: CreateCompletionRequest,
            options?: AxiosRequestConfig,
        ): Promise<
            (
                axios?: AxiosInstance,
                basePath?: string,
            ) => AxiosPromise<CreateCompletionResponse>
        > {
            const localVarAxiosArgs =
                await localVarAxiosParamCreator.createCompletion(
                    createCompletionRequest,
                    options,
                )
            return createRequestFunction(
                localVarAxiosArgs,
                globalAxios,
                BASE_PATH,
                configuration,
            )
        },
    }
}

/**
 * OpenAIApi - factory interface
 * @export
 */
export const OpenAIApiFactory = function (
    configuration?: Configuration,
    basePath?: string,
    axios?: AxiosInstance,
) {
    const localVarFp = OpenAIApiFp(configuration)
    return {
        /**
         * @summary Creates a model response for the given chat conversation.
         * @param {CreateChatCompletionRequest} createChatCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChatCompletion(
            createChatCompletionRequest: CreateChatCompletionRequest,
            options?: any,
        ): AxiosPromise<CreateChatCompletionResponse> {
            const res = localVarFp
                .createChatCompletion(createChatCompletionRequest, options)
                .then((request) => request(axios, basePath))
            console.log(res)
            return
            return res
        },
        /**
         *
         * @summary Creates a completion for the provided prompt and parameters.
         * @param {CreateCompletionRequest} createCompletionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompletion(
            createCompletionRequest: CreateCompletionRequest,
            options?: any,
        ): AxiosPromise<CreateCompletionResponse> {
            const res = localVarFp
                .createCompletion(createCompletionRequest, options)
                .then((request) => request(axios, basePath))
            console.log(res)
            return
            return res
        },
    }
}

/**
 * OpenAIApi - object-oriented interface
 * @export
 * @class OpenAIApi
 * @extends {BaseAPI}
 */
export class OpenAIApi extends BaseAPI {
    /**
     *
     * @summary Creates a model response for the given chat conversation.
     * @param {CreateChatCompletionRequest} createChatCompletionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenAIApi
     */
    public createChatCompletion(
        createChatCompletionRequest: CreateChatCompletionRequest,
        options?: AxiosRequestConfig,
    ) {
        return OpenAIApiFp(this.configuration)
            .createChatCompletion(createChatCompletionRequest, options)
            .then((request) => request(this.axios, this.basePath))
    }

    /**
     *
     * @summary Creates a completion for the provided prompt and parameters.
     * @param {CreateCompletionRequest} createCompletionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenAIApi
     */
    public createCompletion(
        createCompletionRequest: CreateCompletionRequest,
        options?: AxiosRequestConfig,
    ) {
        return OpenAIApiFp(this.configuration)
            .createCompletion(createCompletionRequest, options)
            .then((request) => request(this.axios, this.basePath))
    }
}